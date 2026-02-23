export interface ZoomArchiveItem {
    id: string;
    title: string;
    description: string;
    tags: string[];
    videoUrl: string;
    thumbnailUrl?: string; // Optional: If present, use this. Otherwise, derive from videoUrl if possible.
    date?: string;
}

export interface MaterialItem {
    id: string;
    title: string;
    description: string;
    tags: string[];
    url: string;
    thumbnailUrl?: string;
    fileType?: "pdf" | "link" | "slide" | "doc";
}
