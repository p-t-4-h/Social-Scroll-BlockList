if (location.hostname.includes("youtube.com")) {
    setInterval(() => {
        document.querySelectorAll(
            'ytd-reel-shelf-renderer, a[href^="/shorts/"], ytd-rich-grid-row, ytd-thumbnail-overlay-time-status-renderer, yt-img-shadow'
        ).forEach(el => el.remove());
    }, 500);
}

if (location.hostname.includes("instagram.com")) {
    setInterval(() => {
        document.querySelectorAll(
            'a[href*="/reels/"], div[role="presentation"] video, div[role="presentation"] img[src*="reel"], span[aria-label="Reels"]'
        ).forEach(el => el.remove());
    }, 500);
}
