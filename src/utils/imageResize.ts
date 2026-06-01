// 클라이언트 사이드 이미지 리사이즈 — Canvas API 사용
// 업로드 트래픽과 Supabase Storage 비용을 줄이기 위해 원본도 압축, 썸네일 별도 생성.

export interface ResizedImage {
    blob: Blob;
    width: number;
    height: number;
    mimeType: string;
}

interface ResizeOptions {
    maxSize: number;        // 긴 변 최대 픽셀
    mimeType?: string;      // 'image/jpeg' | 'image/webp'
    quality?: number;       // 0~1
}

const DEFAULT_OPTIONS: Required<ResizeOptions> = {
    maxSize: 1920,
    mimeType: 'image/jpeg',
    quality: 0.85,
};

// File → resized Blob
export async function resizeImage(file: File, options: Partial<ResizeOptions> = {}): Promise<ResizedImage> {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    const bitmap = await loadImageBitmap(file);
    const { width, height } = fitWithin(bitmap.width, bitmap.height, opts.maxSize);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas context 생성 실패');
    ctx.drawImage(bitmap, 0, 0, width, height);

    const blob: Blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error('Blob 변환 실패'))),
            opts.mimeType,
            opts.quality,
        );
    });

    return { blob, width, height, mimeType: opts.mimeType };
}

// 원본(1920) + 썸네일(400) 함께 생성
export async function buildOriginalAndThumbnail(file: File): Promise<{ original: ResizedImage; thumbnail: ResizedImage }> {
    const original = await resizeImage(file, { maxSize: 1920, quality: 0.85 });
    const thumbnail = await resizeImage(file, { maxSize: 400, quality: 0.75 });
    return { original, thumbnail };
}

async function loadImageBitmap(file: File): Promise<ImageBitmap> {
    if (typeof createImageBitmap === 'function') {
        try {
            return await createImageBitmap(file);
        } catch {
            // Safari/iOS HEIC 등 — fallback
        }
    }
    return await loadViaImgElement(file);
}

function loadViaImgElement(file: File): Promise<ImageBitmap> {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = async () => {
            URL.revokeObjectURL(url);
            try {
                const bitmap = await createImageBitmap(img);
                resolve(bitmap);
            } catch (e) {
                reject(e);
            }
        };
        img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('이미지 로딩 실패'));
        };
        img.src = url;
    });
}

function fitWithin(w: number, h: number, max: number): { width: number; height: number } {
    if (w <= max && h <= max) return { width: w, height: h };
    if (w >= h) {
        return { width: max, height: Math.round((h * max) / w) };
    }
    return { width: Math.round((w * max) / h), height: max };
}
