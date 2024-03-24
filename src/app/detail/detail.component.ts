import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  bookId: number | null = null; 
  bookDetails: { url: string; text: string; text2: string, price: number; images: { small: string; large: string }[] } = { url: '', text: '', text2: '', price: 0, images: [] };

  showLarge: boolean = false;
  largeImageUrl: string | null = null;

  selectedImageIndex: number = 0;

  showArrows: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.bookId = Number(params.get('id')); 
      if (this.bookId) {
        this.bookDetails = this.getBookDetailsById(this.bookId);
      }
    });
  }

  getBookDetailsById(id: number): { url: string; text: string; text2: string; price: number; images: { small: string; large: string }[] } {
    const comics = [
      { id: 1, url: "../../assets/imgs/comic/spi1-cover.webp", text: "1.rész", text2: "", price: 1111, images: [
        { small: "../../assets/imgs/more/try.png", large: "../../assets/imgs/more/try.png" },
        { small: "../../assets/imgs/more/try2.png", large: "../../assets/imgs/more/try2.png" },
        { small: "../../assets/imgs/more/try3.png", large: "../../assets/imgs/more/try3.png" }
      ]},
      { id: 2, url: "../../assets/imgs/comic/spi2-cover.webp", text: "2.rész", text2: "leiras", price: 0, images: [] },
      { id: 3, url: "../../assets/imgs/comic/spi3-cover.webp", text: "3.rész", text2: "leiras", price: 0, images: [] },
      { id: 4, url: "../../assets/imgs/comic/spi4-cover.webp", text: "4.rész", text2: "leiras", price: 0, images: [] },
      { id: 5, url: "../../assets/imgs/comic/spi5-cover.webp", text: "5.rész", text2: "leiras",  price: 0, images: [] },
      { id: 6, url: "../../assets/imgs/comic/spi6-cover.webp", text: "6.rész", text2: "leiras", price: 0, images: [] },
      ];

    const book = comics.find(item => item.id === id);
    return book ? { url: book.url, text: book.text, text2: book.text2, price: book.price, images: book.images } : { url: '', text: '', text2: '', price: 0, images: [] };
  }

  showLargeImage(imageUrl: string, index: number) {
    this.selectedImageIndex = index;
    this.largeImageUrl = imageUrl;
    this.showLarge = true;
    this.showArrows = false;
  }

  closeLargeImage() {
    this.showLarge = false;
    this.largeImageUrl = null;
    this.showArrows = false;
  }

  nextImage() {
    if (this.selectedImageIndex < this.bookDetails.images.length - 1) {
        this.selectedImageIndex++;
        this.largeImageUrl = this.bookDetails.images[this.selectedImageIndex].large;
    }
}

prevImage() {
    if (this.selectedImageIndex > 0) {
        this.selectedImageIndex--;
        this.largeImageUrl = this.bookDetails.images[this.selectedImageIndex].large;
    }
}


}
