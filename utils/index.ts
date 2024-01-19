export function timeAgo(dateString: string): string {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.ceil(diffDays / 30);
    const diffYears = Math.ceil(diffMonths / 12);

    if (diffYears > 1) {
        return `${diffYears} years ago`;
    } else if (diffMonths > 1) {
        return `${diffMonths} months ago`;
    } else {
        return `${diffDays} days ago`;
    }
}


