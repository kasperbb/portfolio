export interface Image {
	url: string
	metadata: ImageMetadata
}

export interface ImageMetadata {
	lqip: string
	palette: ImagePalette
}

export interface ImagePalette {
	darkMuted?: ImagePaletteItem
	darkVibrant?: ImagePaletteItem
	dominant?: ImagePaletteItem
	lightMuted?: ImagePaletteItem
	lightVibrant?: ImagePaletteItem
	muted?: ImagePaletteItem
	vibrant?: ImagePaletteItem
}

export interface ImagePaletteItem {
	background: string
	foreground: string
	population: number
	title: string
	_type: string
}
