import { onMounted, onUnmounted } from 'vue';

export function useEscapeKey(callback: () => void) {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            callback();
        }
    };

    onMounted(() => {
        document.addEventListener('keydown', handleKeyDown);
    });

    onUnmounted(() => {
        document.removeEventListener('keydown', handleKeyDown);
    });
}