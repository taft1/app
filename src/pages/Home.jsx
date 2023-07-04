function Home () {

const home = ( 
    <main class="bg-[#fff] justify-items-center ">
      <div className="pg-header" class="bg-[#e6e6e6] p-[60px] pr-0">
        <div className="container" class="text-[#333] font-[600] text-[32px] uppercase m-0">
          <h1>Welcome to ...</h1>
        </div>
      </div>
      
    </main>
);

const content = (
  <div className="container content" class="pt-[40px] pb-[40px] pl-[60px] pr-[230px] bg-white h-[200px]">
        <p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut. Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
        <br />
        <p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut. Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo. Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
      </div>
)

    return (
      <div>
        <hr />
        {home}
        <hr />
        {content}
      </div>
    );
}


export default Home