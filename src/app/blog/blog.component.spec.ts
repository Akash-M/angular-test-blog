import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule,
        Ng2SearchPipeModule,NgxPaginationModule,Ng2OrderModule,FormsModule ],
      declarations: [ BlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create BlogComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should render all cards', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#blog-title').innerText).toBe('Blogs');
    expect(compiled.querySelector('#blog-info-title').innerText).toBe('Blog Information');
    expect(compiled.querySelector('#blog-fav-title').innerText).toBe('Favorite Blogs');
  }));
});
