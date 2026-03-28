document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.querySelector('.share-btn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Vendedor Digital',
                    text: 'Solución completa para empezar a vender en internet.',
                    url: window.location.href
                }).then(() => {
                    console.log('Gracias por compartir');
                }).catch(console.error);
            } else {
                // Fallback: Copy to clipboard
                const dummy = document.createElement('input');
                document.body.appendChild(dummy);
                dummy.value = window.location.href;
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
                alert('¡Enlace copiado al portapapeles!');
            }
        });
    }
});
