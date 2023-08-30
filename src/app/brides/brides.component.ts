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
  selector: 'app-brides',
  templateUrl: './brides.component.html',
  styleUrls: ['./brides.component.scss']
})
export class BridesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  landsData: LandProps[] = [
    {
      "id": 1,
      "name": "Nilanthi Perera",
      "age": 23,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640%2C427"
    },
    {
      "id": 2,
      "name": "Tharushi Kavindya",
      "age": 22,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://i.insider.com/52c96f6269beddb8064f26d4?width=750&format=jpeg&auto=webp"
    },
    {
      "id": 3,
      "name": "Hinashi Anuththara",
      "age": 25,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0="
    },
    {
      "id": 4,
      "name": "Kavindi Anuththara",
      "age": 35,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://www.elitesingles.ca/wp-content/uploads/sites/113/2020/06/2b_en_articleslide_sw5-350x264.jpg"
    },
    {
      "id": 5,
      "name": "Supuni Perera",
      "age": 28,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://cdn-aiheb.nitrocdn.com/dPUaMsfRlIzkbsDbREnTZjUIdmcLNUaY/assets/images/optimized/rev-097217d/wp-content/uploads/2023/03/portrait-young-pretty-positive-girl-smiling.jpg"
    },
    {
      "id": 6,
      "name": "Nilanthi Perera",
      "age": 23,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640%2C427"
    },
    {
      "id": 7,
      "name": "Tharushi Kavindya",
      "age": 22,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://i.insider.com/52c96f6269beddb8064f26d4?width=750&format=jpeg&auto=webp"
    },
    {
      "id": 8,
      "name": "Hinashi Anuththara",
      "age": 25,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0="
    },
    {
      "id": 9,
      "name": "Kavindi Anuththara",
      "age": 35,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://www.elitesingles.ca/wp-content/uploads/sites/113/2020/06/2b_en_articleslide_sw5-350x264.jpg"
    },
    {
      "id": 10,
      "name": "Supuni Perera",
      "age": 28,
      "address": 'Ratnapura',
      "occupation": "IT",
      "religion": "Buddism",
      "nation": "Sinhala",
      "height": "20",
      "description": "description1",
      "image": "https://cdn-aiheb.nitrocdn.com/dPUaMsfRlIzkbsDbREnTZjUIdmcLNUaY/assets/images/optimized/rev-097217d/wp-content/uploads/2023/03/portrait-young-pretty-positive-girl-smiling.jpg"
    }
  ]

}
