import { Component, OnInit } from '@angular/core';

export interface ServicesProps {
  id: number;
  name?: string;
  description?: string;
  image?: string;
}

export interface HappyStoriesProps {
  id: number;
  name?: string;
  description?: string;
  image?: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services: ServicesProps[] = [
    {
      "id": 1,
      "name": "ගාස්තු රහිත සේවය",
      "description": 'නොමිලේ ලබාදෙන සේවාවක් වන අතර කිසිදු ලියාපදිංචි ගාස්තුවක් අය නොකරේ.',
      "image": 'https://hips.hearstapps.com/edc.h-cdn.co/assets/17/01/1600x1066/wedding-photos-30.jpeg?resize=640:*'
    },
    {
      "id": 2,
      "name": "අඛණ්ඩ විශ්වාසය",
      "description": 'වඩාත් ගුණාත්මක සේවයක් සැපයීමට හැකි වේයයි අපි බලාපොරොත්තු වෙමු.',
      "image": 'https://www.bonobology.com/wp-content/uploads/2021/10/Is-Marriage-Worth-It.jpg'
    },
    {
      "id": 3,
      "name": "පහසු පියවර",
      "description": 'දුරකථන සහ අන්තර්ජාල දැනුම අඩු කෙනෙකුට උවත් පහසුවෙන් සම්බන්ද වියහැකිය.',
      "image": 'https://media.istockphoto.com/id/1435794871/photo/bride-and-grooms-hands.webp?b=1&s=170667a&w=0&k=20&c=JvekhwGWKZP4TRXGaI91wE6agvb3ZvBZy4Q0zLQWHWM='
    },
    {
      "id": 4,
      "name": "ගාස්තු රහිත සේවය",
      "description": 'නොමිලේ ලබාදෙන සේවාවක් වන අතර කිසිදු ලියාපදිංචි ගාස්තුවක් අය නොකරේ.',
      "image": 'https://hips.hearstapps.com/edc.h-cdn.co/assets/17/01/1600x1066/wedding-photos-30.jpeg?resize=640:*'
    },
    {
      "id": 5,
      "name": "අඛණ්ඩ විශ්වාසය",
      "description": 'වඩාත් ගුණාත්මක සේවයක් සැපයීමට හැකි වේයයි අපි බලාපොරොත්තු වෙමු.',
      "image": 'https://www.bonobology.com/wp-content/uploads/2021/10/Is-Marriage-Worth-It.jpg'
    },
  ]

  happyStories: HappyStoriesProps[] = [
    {
      "id": 1,
      "name": "Kusum & Nuwan",
      "description": '2023-12-07',
      "image": 'https://i.pinimg.com/originals/46/aa/98/46aa98f1292452afd13ac6f1296c0795.jpg'
    },
    {
      "id": 2,
      "name": "Nilantha & Jayawathi",
      "description": '2022-11-30',
      "image": 'https://static.showit.co/800/HTGAwocBReS5nU4ZSu8bDA/118910/laura-may-photography-wedding-gallery-portfolio-17.jpg'
    },
    {
      "id": 3,
      "name": "Kasun & Renuka",
      "description": '2021-05-17',
      "image": 'https://images.squarespace-cdn.com/content/v1/5413fa41e4b0c669adfc835a/1463925511257-SSF2JAE19EDAD141T4Q8/image-asset.jpeg?format=500w'
    },
    {
      "id": 4,
      "name": "Yureni & Kalana",
      "description": '2023-12-07',
      "image": 'https://i0.wp.com/emilyalyssa.com/wp-content/uploads/2019/08/meridian-house-dc-photographer-wedding-photos-122_photos.jpg?resize=960%2C644&ssl=1'
    },
    {
      "id": 5,
      "name": "Lasith & Piyumi",
      "description": '2021-08-26',
      "image": 'https://media-api.xogrp.com/images/195f00fd-b65c-452e-961d-b0c98de1cc92~sc_450.250'
    },
    {
      "id": 6,
      "name": "Kusum & Nuwan",
      "description": '2023-12-07',
      "image": 'https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1631875218540-ALBBR5AMF1B9PAZ6B5KS/4c54e106d00b23ea9f75afbd4e63b8f5-medium.jpg'
    },
    {
      "id": 7,
      "name": "Nilantha & Jayawathi",
      "description": '2022-11-30',
      "image": 'https://www.happywedding.app/blog/wp-content/uploads/2019/03/How-to-pose-for-couple-photography.jpg'
    },
    {
      "id": 8,
      "name": "Kasun & Renuka",
      "description": '2021-05-17',
      "image": 'https://www.weddingsutra.com/images/snf-weddings-thumb-700x452.jpg?%3E'
    }
  ]

}
