import React from 'react';
import ReactDOM from 'react-dom';


function News(props) {
  const newprops = JSON.stringify(props);
  //const newsOfDay = ( 
    //<ul class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
     // {props.posts.map((post) =>
      //<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      //<li class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-black" key={post.id}>
       // {post.title}
      //</li>
      //</div> 
      //)}
    //</ul>
  //);
  //const content = props.posts.map((post) => 
  //<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto " key = {post.id}>
    //<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-50">
      //<div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        //<div class="h-100 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        //<img class="w-auto h-28" width="56" height="56" viewBox="0 0 56 56" fill="none" src="https://yt3.googleusercontent.com/gDCwhZGxgUY2Psz0NciwaxgVukw3MWf_f6T4OhymWkRQBdN8UGmGwsVhqiUjde98Dh8meWEE0g=s900-c-k-c0x00ffffff-no-rj" alt="genius_logo">
        //</img>
        //<div class="p-4 md:p-6">
    //<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">{post.content}</h3>
    //<p class="mt-3 text-gray-500">{post.paragraph}</p>
    
    //</div >
    //</div>
    //</div>
    //</div>
  //</div>
  //);
  return (
    <div>
      {newprops}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Music News of the day'},
  {id: 2,  content: 'Rapper Clonnex presented a grand one and a half hour album MEDIV Ultimate Victim. It`s caustic, provocative and in a good way cringe-worthy.', paragraph: 'MEDIV Ultimate Victim clings to a meta-ironic and innovative approach to creating music within the framework of Ukrainian hip-hop. "Zhyvchyk", "Puzata huta", Mavka, chupacabra - Clonnex reads about images that are close and familiar to every young Ukrainian, combining it with a current and used sound. Some tracks are simply doomed to popularity on TikTok.'},
  {id: 3,  content: 'Pink Tape is the third studio album by American rapper and singer Lil Uzi Vert.', paragraph: 'It was released through Generation Now and Atlantic Records on June 30, 2023.[2] The album follows their extended play Red & White (2022). The album was supported by the top-10 single "Just Wanna Rock" (2022). The album contains guest appearances from Travis Scott, Nicki Minaj, Bring Me The Horizon, Don Toliver, and Babymetal.'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<News posts={posts} />);

export default News;