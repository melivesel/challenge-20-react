import Project from "../components/Project";

export default function PortfolioPage() {

    const projectsData = [
        {
            title: "Title 1",
            image: "http://placeholder.co/600"
        },
        {
            title: "Title 2",
            image: "http://placeholder.co/600"
        },
        {
            title: "Title 3",
            image: "http://placeholder.co/600"
        }
    ]


    return (
        <div>
            <p>   Portfolio Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
        impedit suscipit sed magnam alias in, repellat expedita hic explicabo
        architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit voluptate exercitationem quaerat pariatur
        mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
        nostrum temporibus ad omnis nam rerum eligendi.</p>


                <div>

                    {
                        projectsData.map(data => {
                            return (
                                <Project data={data}/>
                            )
                        })
                    }
                    

                </div>

        </div>

    );
}