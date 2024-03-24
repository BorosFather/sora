import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})

export class ComicsComponent {
  comics!: { id: number; url: string; text: string }[][];
  selectedImageUrl: any;
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    
    const comics = [
      { id: 1, url: "../../assets/imgs/comic/spi1-cover.webp", text: "1.rész"},
      { id: 2, url: "../../assets/imgs/comic/spi2-cover.webp", text: "2.rész"},
      { id: 3, url: "../../assets/imgs/comic/spi3-cover.webp", text: "3.rész"},
      { id: 4, url: "../../assets/imgs/comic/spi4-cover.webp", text: "4.rész"},
      { id: 5, url: "../../assets/imgs/comic/spi5-cover.webp", text: "5.rész"},
      { id: 6, url: "../../assets/imgs/comic/spi6-cover.webp", text: "6.rész"},
    ];

    this.comics = this.chunkArray(comics, 3);
  }

  chunkArray(array: any[], size: number): any[] {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }

}
