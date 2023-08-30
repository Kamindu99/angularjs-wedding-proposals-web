import { Component, OnInit } from '@angular/core';

export interface LandProps {
  id: number;
  name?: string;
  age?: number;
  address?: string;
  occupation?: string;
  religion?: string;
  nation?: string
  height?: string
  description?: string;
  image?: string
}

@Component({
  selector: 'app-grooms',
  templateUrl: './grooms.component.html',
  styleUrls: ['./grooms.component.scss']
})
export class GroomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  landsData: LandProps[] = [
    {
      "id": 1,
      "name": "Kamindu Gayantha",
      "age": 23,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://manyavar.scene7.com/is/image/manyavar/Day%20411408_10-11-2022-05-40:283x395"
    },
    {
      "id": 2,
      "name": "Gayantha Kamindu",
      "age": 22,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://scotlandshop.imgix.net/assets.scotlandshop.com/content/Mens-Tartan-Wedding-Suits-Category-Image.jpg?auto=format&fit=crop&fp-x=0.5&fp-y=0.5&h=240&ixlib=php-3.3.1&q=80&w=365&s=27cd496fd6e0ed188e48783d00c668ff"
    },
    {
      "id": 3,
      "name": "Nilantha Silva",
      "age": 25,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://www.fjackets.com/blog/wp-content/uploads/2020/05/grey-tuxedo.jpg"
    },
    {
      "id": 4,
      "name": "Nuwan Chathuranga",
      "age": 35,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://cdn.curatedtaste.com/1665470112922.jpg"
    },
    {
      "id": 5,
      "name": "Isuru Udara",
      "age": 28,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://media.licdn.com/dms/image/C4E03AQFc3uNmlXuDfw/profile-displayphoto-shrink_800_800/0/1651223526441?e=2147483647&v=beta&t=v7U79SiIpcfk8cY0qYAPY3qnd61YtPchQxTc9hed1Z4"
    }
  ]
}
