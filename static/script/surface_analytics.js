(function () {
    // Generate a persistent visitorId
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
        visitorId = crypto.randomUUID();
        localStorage.setItem('visitorId', visitorId);
    }

    // Helper to send events to backend
    function sendEvent(type, metadata = {}) {
        fetch('http://localhost:3000/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                type,
                visitorId,
                pageUrl: window.location.href,
                metadata,
            }),
        }).catch((err) => console.error('Failed to send event:', err));
    }

    // Track script initialization
    sendEvent('script_initialized');

    // Track page view
    sendEvent('page_view');

    // Track email entered
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', (e) => {
            const value = e.target.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && emailRegex.test(value)) sendEvent('email_entered', { email: value });
        });
    }

    // Track any element click
    document.addEventListener('click', (e) => {
        const target = e.target;

        sendEvent('element_click', {
            tag: target.tagName.toLowerCase(),
            id: target.id || null,
            class: target.className || null,
            text: target.innerText?.slice(0, 100) || null, // limit to 100 chars
        });
    });

    // Expose a global trackEvent for custom tracking
    window.trackEvent = sendEvent;
})();
