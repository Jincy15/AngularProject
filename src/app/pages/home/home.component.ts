import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  districts=[
    {
      id:1,
      title:"kochi",
      image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/20/44/7f/cherai-beach.jpg?w=500&h=400&s=1",
      desc:"Cherai Beach - Cherai beach is popular among beaches in Kochi. The seashells on Cherai Beach are unique and swimmers have been known to run into dolphins in the waters."

    },
    {
      id:2,
      title:"alleppey",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/1200px-Alleppey_beach.jpg",
      desc:"Alappuzha beach  - Alleppey Beach is one of the serene white sand beaches located on the shores of the Arabian Sea in Kerala. It is one of the popular beaches in Kerala, and among the top places to visit in Alleppey. Known for its swaying beauty and alluring charm."
    },
    {
      id:3,
      title:"Thiruvananthapuram",
      image:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/12/Kovalam-Beach-1280x720.jpg",
      desc:"Kovalam Beach - Possibly the most popular beach around Trivandrum, the Kovalam Beach is almost always filled with tourists. The beach derives its name from Coconut Trees, and there are plenty of them to be seen around the beach. "
    }

   

  ]

}
