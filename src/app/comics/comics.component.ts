import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})

export class ComicsComponent {
  comics!: { url: string; text: string }[][];
  
  ngOnInit(): void {
    
    const comics = [
      { url: "../../assets/imgs/comic/spi1-cover.webp", text: "1.rész"},
      { url: "../../assets/imgs/comic/spi2-cover.webp", text: "2.rész"},
      { url: "../../assets/imgs/comic/spi3-cover.webp", text: "3.rész"},
      { url: "../../assets/imgs/comic/spi4-cover.webp", text: "4.rész"},
      { url: "../../assets/imgs/comic/spi5-cover.webp", text: "5.rész"},
      { url: "../../assets/imgs/comic/spi6-cover.webp", text: "6.rész"},
    ];

    this.comics = this.chunkArray(comics, 3);
  }

  chunkArray(array: any[], size: number): any[] {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, i * size + size)
    );
  }

}
