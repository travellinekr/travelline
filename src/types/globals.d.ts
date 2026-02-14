/// <reference types="@types/google.maps" />

declare global {
    interface Window {
        google: typeof google;
    }

    namespace google.maps.marker {
        interface PinElementOptions {
            glyphText?: string;
        }
    }
}

export { };
