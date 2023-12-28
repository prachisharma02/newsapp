import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Daniel Cooper",
      title: "The Morning After: Let’s talk about Air Quality",
      description:
        "Wildfires in Canada have led to a surge in air pollution levels in the US, with New York currently having the worst air quality of any major city. There are plenty of images of N95-mask-wearing people walking down smog-blighted streets that wouldn’t look out …",
      url: "https://www.engadget.com/the-morning-after-lets-talk-about-air-quality-111528380.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/whFENLFcmtfyh1QbCjNiQw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/899ae950-05e3-11ee-adf3-00256ef7c441.cf.jpg",
      publishedAt: "2023-06-08T11:15:28Z",
      content:
        "Wildfires in Canada have led to a surge in air pollution levels in the US, with New York currently having the worst air quality of any major city. There are plenty of images of N95-mask-wearing peopl… [+3637 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Kate Knibbs",
      title: "Apple’s Vision Pro Isn’t the Future",
      description:
        "The new mixed-reality headset is an alarming misfire. Has Apple lost its innovation mojo?",
      url: "https://www.wired.com/story/apple-vision-pro-doomed/",
      urlToImage:
        "https://media.wired.com/photos/64810f543d9e6b1cb17a892b/191:100/w_1280,c_limit/Apple-Vision-Pro-Might-Flop-Culture-1258467546.jpg",
      publishedAt: "2023-06-08T11:00:00Z",
      content:
        "Even the more enthusiastic assessments of Vision Pro tend to fall back on the argument that Apple is simply too good at hardware to fail. Its not like a regular tech company, its a cool tech company.… [+4458 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Michael Calore, Lauren Goode",
      title: "Objects in Apple’s Vision Are Closer Than They Appear",
      description:
        "This week, we learn what it's like to wear and use Apple's Vision Pro headset. Also, we round up the rest of the news from WWDC.",
      url: "https://www.wired.com/story/gadget-lab-podcast-600/",
      urlToImage:
        "https://media.wired.com/photos/648112d088479249e0cc2a07/191:100/w_1280,c_limit/Objects-in-Apple%E2%80%99s-Vision-Are-Closer-Than-They-Appear-Gear.jpg",
      publishedAt: "2023-06-08T12:00:00Z",
      content:
        "After years of rumor and speculation, Apple finally took the wraps off its virtual reality headset this week. The Apple Vision Pro made its debut at the companys big developer conference in Cupertino… [+2196 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Julian Chokkattu",
      title:
        "Top Features in Apple’s iOS 17 and iPadOS 17: Compatible Devices, Release Date",
      description:
        "Learn about the NameDrop, Contact Posters, and Adaptive Audio—all coming to your iPhone later this year.",
      url: "https://www.wired.com/story/apple-iphone-ios-17-ipados-17-new-features/",
      urlToImage:
        "https://media.wired.com/photos/64811fb20124a91cee27d969/191:100/w_1280,c_limit/iOS-17-Features-Gear.jpg",
      publishedAt: "2023-06-08T11:00:00Z",
      content:
        "Your iMessage apps are no longer going to clutter up the top of the keyboard but now live inside a little + icon. Tap it to expand them, and it'll sort the list by the apps you use the most. You can … [+9595 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Sian Cain",
      title:
        "Tom Holland taking year off from acting after latest role ‘did break me’",
      description:
        "British actor says playing character with severe mental illness in Apple TV+ series The Crowded Room left him struggling to extract himself from the roleTom Holland says he is taking a year off from acting to look after his mental health, after having a “toug…",
      url: "https://www.theguardian.com/film/2023/jun/08/tom-holland-taking-year-off-from-acting-after-latest-role-tv-show-the-crowded-room",
      urlToImage:
        "https://i.guim.co.uk/img/media/c56ef0f105abeaf7ca2db795531029ff527a7b5a/0_212_3726_2236/master/3726.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c39ba89c7ba63c6d9be3b03a8e280da3",
      publishedAt: "2023-06-08T00:19:20Z",
      content:
        "Tom Holland says he is taking a year off from acting to look after his mental health, after having a tough time and a bit of a meltdown while working on his latest project.\r\nThe 27-year-old British a… [+2802 chars]",
    },
  ];

  constructor() {
    super();

    console.log("object");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?&category=business&apiKey=3cfeee8259f2456384cc075a70fbb42c";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey Top HeadLines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {" "}
                <NewsItem
                  title={element.title.slice(0, 65)}
                  description={element.description.slice(0, 88)}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
