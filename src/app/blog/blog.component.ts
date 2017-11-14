import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

declare let $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private p: number = 1;
  private blogUrl: string = "https://jsonplaceholder.typicode.com/posts";
  private blogs;
  private filter;
  private selectedBlog = null;
  private favoriteBlogs:any[] = [];
  key: string = 'title';
  reverse: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts():void{
    this.http.get(this.blogUrl)
        .map(res => res)
        .subscribe((blogs) => {
          this.blogs=blogs;
        });
  };

  getBlogDetails(blogTitle):void{
    this.selectedBlog = this.blogs.find(
        blog => blog.title === blogTitle);
  }

  sort(key):void{
    this.key = key;
    this.reverse = !this.reverse;
  }

  markAsFavorite(selectedBlog):void{
    if(!this.checkIfExists(selectedBlog)) {
      this.addToFavorites(selectedBlog);
    } else {
      this.removeFromFavorites(selectedBlog);
    }
  }

  private addToFavorites(selectedBlog):void{
    this.favoriteBlogs.push(this.blogs.find(blog => blog.title === selectedBlog.title));
    this.showNotification('bottom','center','Blog added to favorites','success');
  }

  private removeFromFavorites(selectedBlog):void{
    this.favoriteBlogs.splice(this.favoriteBlogs.indexOf(selectedBlog),1);
    this.showNotification('bottom','center','Blog removed from favorites','danger');
  }

  private checkIfExists(selectedBlog):boolean{
    return this.favoriteBlogs.some(
        blog => blog.title === selectedBlog.title
    );
  }

  private showNotification(from, align, message, type):void{
    $.notify({
      icon: "notifications",
      message: message
    },{
      type: type,
      timer: 50,
      placement: {
        from: from,
        align: align
      }
    });
  }

}

