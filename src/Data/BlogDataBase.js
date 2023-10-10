import React from 'react'
import { useState, createContext } from 'react'

export const BlogData = createContext();
function BlogDataBase(props) {

    const [bollyWoodBlog] = useState(

      [
        {
            BlogId: 1,
            blogTitle: "MS Dhoni The Untold Story: When Sushant Singh Rajput recalled his memorable moment with Dhoni and drew similarities between them",
            blogDesc: "Sushant Singh Rajput was the most sought-after actor in the industry. The late actor kept the audience entertained having featured in several movies within the time span he served. His movie M.S. Dhoni: The Untold Story. was critically acclaimed. He was appreciated for portraying the real-life character of Mahendra Singh Dhoni without errors. To get into the skin of the character Rajput stayed with the Indian cricketer and observed him. Throwback to the time of MS Dhoni movie release and SSR spoke his heart out.Mahendra Singh Dhoni, celebrating his 42nd birthday today, was equally involved in making his biopic. He patiently answered all of Sushant Singh Rajput's questions, doubts. The actor knew Dhoni before the film but got to observe him closely and portray him on big screens. While shooting for the film both spent the majority of their time together and had moments.",
            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/07/MS-DHoni-1.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            BlogId: 2,
            blogTitle: "Akshay Kumar addresses the noise around his return as one of the top faces of a tobacco brand; slams fake news",
            blogDesc: "Fans were surprised to see Akshay Kumar in a new TVC for a tobacco brand that also featured Shah Rukh Khan and Ajay Devgn. The three superstars got immense flak when the first ad featuring the trio came out. Akshay Kumar got slammed left, right and centre as he is known to be a fitness icon. In his interviews, he is always talking about a healthy lifestyle. People felt that a public figure with his messaging should not have done that commercial. He later apologized for the same, and said he would not benefit from the sum he earned from the commercial. He gave it for charity. Yesterday, the new TVC of Vimal Zubaan Kesari was out. Akshay Kumar was present there as well. This left netizens wondering if he had gone back on his word.",
            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Akshay-Kumar.png?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            BlogId: 3,
            blogTitle: "'Nushrat Bharucha herself is a cannon', Rakhi Sawant reacted when the actress got stuck in Israel",
            blogDesc: "When paparazzi asked Rakhi Sawant about Nusrat Bharucha being stuck in Israel, she was surprised. Rakhi Sawant says, 'What is the use of Nusrat Bharucha in the war between Israel and Palestine.' On this the paparazzi says that she had gone there for some work. Then Rakhi Sawant says, 'I think Nusrat Bharucha herself is a cannon and which country did she go from?' On this the paparazzi says that she had gone to Israel from India. Then Rakhi Sawant says, 'Nushrat Bharucha is a cannon, so whether she had gone from Israel or Palestine.' Paparazzi say that she went to Israel from India to shoot. Rakhi Sawant says, 'Went to shoot in Israel. Thank God she came back safely. Don't take tension, only Israel will win.",
            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Untitled-design-29.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

        },


        {
            BlogId: 4,
            blogTitle: "Rekha was adamant on divorce from husband Mukesh Agarwal after a few months of marriage, secretary Farzana became the reason?",
            blogDesc: " Veteran Bollywood actress Rekha is celebrating her 69th birthday today. Rekha, who has worked in more than 180 films, was born on 19 October 1954. Rekha entered the world of acting at the age of just 4 years. The actress entered Bollywood in the year 1979 with the film 'Sawan Bhado', which proved to be a superhit at the box office. After this Rekha appeared in many superhit films. However, this Bollywood beauty remained in the news more for her personal life than her films. Rekha's name was associated with Jeetendra, Kiran Kumar, Vinod Mehra, Sanjay Dutt and Akshay Kumar in her career. Apart from this, Rekha's affair with married Amitabh Bachchan also made a lot of headlines. However, when Rekha married businessman Mukesh Aggarwal on March 4, 1990, everyone was surprised.",

            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Collage-Maker-09-Oct-2023-09-41-PM-7474.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
        },


        {
            BlogId: 5,
            blogTitle: "Ganapath trailer: Tiger Shroff, Kriti Sanon get thumbs up from fans; amazing VFX and action sequences impress",
            blogDesc: "Tiger Shroff and Kriti Sanon starrer Ganapath: A Hero is Born’s trailer released today. The film has been the most awaited one and finally fans got to see a glimpse of it today. The trailer is always an important part of the film as it decides how the film will be. People often watch the trailer and then only decide to go for the movie. If the trailer is impressive, the movies definitely does the best at the Box Office. And, Ganapath’s trailer has done the job.Yes, the trailer has been quite impressive. The trailer shows a glimpse of the dystopian society and how Tiger’s character will protect the people from evil things. Tiger is seen involved in some amazing action scenes and later we see Kriti Sanon in a never seen before avatar",

            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/MicrosoftTeams-image-52.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            BlogId: 6,
            blogTitle: "Jawan star Nayanthara wishes her twins on their first birthday with a long emotional note",
            blogDesc: "Jawan star Nayanthara is right now in the happiest phase of her life, personally and professionally. The actress who is bashing super divas in her Bollywood debut film Jawan is in celebratory mode as her lifelines, her babies, and her twins have turned one. Nayanthara, who is a happy mother before anything else, took to her Instagram account and shared a long emotional note for her twins Ujir and Ulag on their duet birthdays. Nayanthara opened her heart out and revealed everything that she feels about her kids.",
            blogImg: 'https://assets.thehansindia.com/h-upload/2022/06/09/500x300_1296870-vignesh.webp'

        },

        {
            BlogId: 7,
            blogTitle: "Naga Chaitanya’s latest post sparks patch up rumours with ex wife Samantha Ruth Prabhu",
            blogDesc: "JNaga Chaitanya and Samantha Ruth Prabhu are once again making headlines, and this time fans believe that the ex-couple is planning to get back together. The latest post shared by Chay on his Instagram once again sparked their patch-up rumours, and fans cannot contain their excitement. The Laal Singh Chaddha actor shared the picture of the pet and mentioned 'vibe' in his caption, and it looks like the ex-couple is co-parenting their pet. Samantha's pet Hash is with Chay, and the actor is spending some good time with him while the Kushi actress is away for work.",
            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/anupamaa-nehha-pendse-5.png?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            BlogId: 8,
            blogTitle: "Gadar 2 effect: Sunny Deol starrer along with Aamir Khan gets a whopping offer from OTT giant?",
            blogDesc: "Gadar 2 is creating waves at the box office even on the 5oth day of release. The film is creating history each day and so far has earned 524.75 crore, has defeated Shah Rukh Khan starrer Pathaan, and is inching towards Jawan. And this massive success has had a positive effect on Sunny Deol's career. This is the highest phase of Sunny Deol's 22 long years of career, and he rightly deserves it. While now the latest update about the star is that his next film, which is produced by Aamir Khan, has got an offer of a whooping amount of Rs 95 crore from an OTT giant, this is an extremely insane feeling for Sunny Deol himself.",
            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Sojo-3.png?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            BlogId: 9,
            blogTitle: "Alia Bhatt adorably holding Raha Kapoor on their mommy-baby day out is too cute to miss",
            blogDesc: "Alia Bhatt was spotted in town today along with her little daughter, Raha Kapoor, and what made fans melt their hearts was the way Alia was adorably holding her little one in her arms. The paparazzi managed to capture the cute mommy and daughter in the town, and we cannot get enough of their cuteness. Alia was seen leaving her house and making her way into the car. It looks like Raha's going out today, and we wonder if the little one has gone to Kareena Kapoor Khan's house for a playdate with her brothers Taimur and Jeh. Alia Bhatt was seen wearing a cool pastel-coloured shirt and pant while Raha was matching the outfit with her mommy, and those cute two ponytails of the little one are definitely something you cannot miss.",
            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/MicrosoftTeams-image-2023-10-08T151403.285.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            BlogId: 10,
            blogTitle: "Kareena Kapoor Khan begins shooting for Singham Again; Ranveer Singh aka Simmba reveals a common connection",
            blogDesc: "Rohit Shetty has begun shooting for his next in the cop-verse, which is Singham Again also known as Singham 3. The upcoming new movie will have Ajay Devgn reprising his role as Bajirao Singham with Ranveer Singh returning as Simmba. Akshay Kumar, Deepika Padukone and Kareena Kapoor Khan are also a part of the project. The shooting commenced on 16th September 2023 with Ajay and Ranveer. The rest of the cast were scheduled to join later. Kareena Kapoor Khan has now joined the shoot of Singham Again She is standing in the middle of the road, all by herself. Bebo captioned the picture saying that she doesn't need to tell which movie she is shooting for. She praised the Rohit Shetty, calling the director one of her favourites. Kareena also reveals that this is her fourth film with Shetty and is sure that it is not going to be her last one.",
            blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Singham-Again.png?impolicy=Medium_Widthonly&w=1280&h=900'

        },

        {
            BlogId: 11,
            blogTitle: "Leo: Thalapathy Vijay, Lokesh Kanagaraj film's Telugu theatrical deal to be revised due to THESE films?",
            blogDesc: "One of the most anticipated movies to come during Dussehra is Leo. Thalapathy Vijay and Lokesh Kanagaraj have made one of the most hyped films of 2023. The trailer has got a great response so far. We can see Thalapathy Vijay in the main role of Leo Das. The action packed trailer also has Sanjay Dutt, Trisha and Arjun Sarja. Lokesh Kanagaraj has shot the film in the snow clad valleys of Kashmir. The CGI shots of Thalapathy Vijay fighting with a hyena have been appreciated as well. But it looks like there is a issue with theatrical rights in the Telugu belt.",
            blogImg: 'https://static.toiimg.com/thumb/msid-96935817,width-1280,resizemode-4/96935817.jpg'

        },

      ]
    )

    return (
        <BlogData.Provider value={{bollyWoodBlog}}>
            {props.children}
        </BlogData.Provider>
    )
}

export default BlogDataBase
