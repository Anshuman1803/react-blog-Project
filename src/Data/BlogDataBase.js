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
    );

    const [hollyWoodBlog] = useState(

        [
          {
              BlogId: 1,
              blogTitle: "Harry Potter actor Sir Michael Gambon aka Albus Dumbledore passes away at 82; fans say, 'Raise Your Wands",
              blogDesc: "Harry Potter fans are bereaved. Irish actor Sir Michael Gambon who played the famed head of Hogwarts Albus Dumbledore is six of the eight Harry Potter movies is no more. He died at 82 after a bout of pneumonia. Fans are heartbroken at this sad news. It seemed he died peacefully in his sleep. His widow Lady Gambon and son Fergus issued a short statement confirming the same. His family was by his side. He was the winner of four BAFTA awards. Sir Michael Gambon's demise has saddened millions of Potterheads the world over. His wise words have flooded social media has fans remember themIn his career, he has won Emmy and Tony award nominations too. He was knighted for his services in 1998. His last stage performance was in 2012.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-28T182505.641.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
          {
              BlogId: 2,
              blogTitle: "Joe Jonas responds to Sophie Turner’s allegation, denies claims that their daughters were 'abducted'",
              blogDesc: "The divorce between Sophie Turner and Joe Jonas took a bitter turn after the former filed a lawsuit against The Jonas Brothers’ singer and sued him for refusing their daughters’ return to the UK. The actor also claimed that she found out about Joe filing for divorce days after the reports went viral on social media. Following the allegations, Joe responded to the claims made by Sophie and called them ‘misleading’. In the lawsuit filed by Sophie Turner, the actor alleged that the father, Joe Jonas prevented the children’s return from US to UK, which is a “breach of the mother’s rights of custody” under the English law as the children’s habitual residence is the UK.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Collage-Maker-22-Sep-2023-07-24-AM-5012.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
          {
              BlogId: 3,
              blogTitle: "Jimmy Kimmel tests positive for COVID, cancels live show with Jimmy Fallon and Stephen Colbert",
              blogDesc: "COVID-19 has hit Jimmy Kimmel, the host of Jimmy Kimmel Live, again! Jimmy took to X, formerly called Twitter, to confirm the news. Besides announcing to his fans that he has tested positive for Coronavirus, Jimmy also confirmed that “this weekend's Strike Force Three show” have been called off.“Well, Las Vegas, I got Covid, and sadly, we need to cancel this weekend’s Strike Force Three show,” he tweeted.Jimmy, who thanked all his fans who bought tickets for the upcoming show, assured them that they’d get full refunds. The popular host also confirmed that his team would try to reschedule the show.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Collage-Maker-21-Sep-2023-10-00-AM-2476.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
  
          {
              BlogId: 4,
              blogTitle: "Travis Kelce’s reaction to Taylor Swift references from NFL commentator goes viral",

              blogDesc: "When dating rumors begin to make headlines, fans do just about everything to look for confirmation. As many continue to wonder if Travis Kelce and Taylor Swift are actually dating, Kansas City Chiefs tight end has finally shared his response.Rumors about Travis dating Taylor began earlier this month after he gave her a bracelet that carried his phone number. Later, it was reported that both hung out in New York.",
  
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Collage-Maker-21-Sep-2023-09-05-AM-524.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
          },
  
  
          {
              BlogId: 5,
              blogTitle: "Justin Bieber celebrates fifth wedding anniversary with Hailey Bieber: ‘You have captivated my heart’",
              blogDesc: "It is a special day for pop star Justin Bieber. For it marks his fifth wedding anniversary with wife Hailey Bieber. To celebrate five years of togetherness with Hailey, the ‘Yummy’ singer expressed his love for her in an emotional Instagram note.In the heartwarming note that Justin wrote, he explained how Hailey has “captivated” his heart.",
  
              blogImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PsK_z8sZ-xC3N2QiVMWMyK7AzCaOFsJObw&usqp=CAU'
  
          },
  
          {
              BlogId: 6,
              blogTitle: "Joe Jones, Sophie Turner officially confirm separation; the singer caught the actress on 'ring camera'?",
              blogDesc: "Joe Jonas and Sophie Turner were seen as an ideal couple by many. Today, the news came that they are headed for a separation. The couple have two very young children. As per Hollywood sources, their personalities just did not match. While Joe Jonas is described as a homebody, Sophie Turner is said to be the partying out-going type. Fans have had varied reactions on this. Many said that Joe Jonas and she dated for a considerable span of time before tying the knot. They wondered how he did not get that their personalities did not match? Sophie Turner has not done any project after Game Of Thrones. It is being assumed that she wants to get back in front of the camera.Sophie Turner said that being a mother is one of the best things in life. The Jonas' family has grown with these girls including Malti Marie Jonas. It seems Joe Jonas is going to file for active co-parenting where he can frequently visit the girls. The only settlement will be of their sprawling marital home.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-06T213150.819.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
          {
              BlogId: 7,
              blogTitle: "Aquaman and the Lost Kingdom teaser: Jason Momoa-starrer is high on mayhem and monsters",
              blogDesc: "JAhead of the full trailer of the much-anticipated movie of 2023 Aquaman and the Lost Kingdom which will be released on September 14, DC has released a brief teaser for its fans. The year 2023 may not have been easy for DC Comics following the box office failure of Shazam! Fury of the Gods, Blue Beetle, and The Flash. However, with Aquaman 2, things could turn in its favour!The teaser brings to DC fans Arthur Curry (Jason Momoa) as he gears up to combat new troubles. It is interesting to see him float, reign and guard the waters. “I’m gonna kill Aquaman” is the unsettling threat from Black Manta (Yahya Abdul-Mateen II) who is hellbent on destroying everything Aquaman holds. A few seconds later, Aquaman rises from the sea on a massive and blue seahorse. What’s unmissable is an octopus that clings to the seahorse. The teaser also brings to the viewers quick snapshots of his house on fire, underwater clashes, and new underwater enemies.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/jason.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
          {
              BlogId: 8,
              blogTitle: "BTS: Did Jungkook really break the smoking laws of California? Fact Check",
              blogDesc: "BTS member Jeon Jungkook has made headlines after his smoking video went viral. Jungkook was in Los Angeles, California for some work related commitments. The Golden Maknae of BTS apparently went for a meal to Matsuhisa, which is a restaurant popular with celebrities of Los Angeles. There were many who said that Jungkook broke the smoking laws of the state of California. As we know, laws in US states about smoking and non-smoking zones differ. Jungkook was seen outside the game of the eatery smoking with a staff member. Some also highlighted that he threw the stub of the cigarette on the streets.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-10T183053.994.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
          {
              BlogId: 9,
              blogTitle: "Jungkook turns 26: Jimin wishes the Golden Maknae with a shirtless pic showing off his moon tattoo; netizens go, 'Damn' [Check Reactions]",
              blogDesc: "BTS member Jungkook has turned 26. The BTS ARMY is celebrating the occasion all over the globe. Wishes have started pouring in from the band members. Jimin has been the first to wish Jungkook on Instagram. He has posted a shirtless pic of the two. We can see the full moon tattoo on the back of Jimin. This is the first time that he has posted a back profile pic in this manner. Fans are wondering what the other members have in store for ARMY now. Needless to say, there is a meltdown and Jikook is trending like crazy.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/FotoJet.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
          {
              BlogId: 10,
              blogTitle: "Nick Jonas can’t get enough of these 3 Indian cuisines, can you guess?",
              blogDesc: "Nick Jonas’ love for India is known by all. Ever since he married Priyanka Chopra in 2018, the singer keeps posting videos of him grooving to Bollywood songs. The singer, who is currently on a tour with the Jonas Brothers, was quizzed by a fan after a recent concert about his favorite Indian cuisines. Nick went on impressing his Indian fans with his answers and proved why he is called the ‘national jiju of India’.In a video going viral on social media, a fan asked Nick about his favorite Indian dishes. To which he replied, “Oh I like Paneer, Lamb Biryani, and you know a Dosa, yeah I like Dosa.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/nick-jonas-news.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
          {
              BlogId: 11,
              blogTitle: "Deep V. Heard on OTT: Read what critics have to say about the documentary series that created a storm on social media",
              blogDesc: "One of the most talked about criminal trials of the century, the infamous defamation case between Hollywood stars and former couple Johnny Depp and Amber Heard became the most popular talking point across the globe last year. On Thursday, streaming giant Netflix released its own miniseries, a documentary based on the case titled Depp V. Heard. The three-part series showcased the testimonies of both the actors side-by-side for the first time and explored the trial that had social media users on their toes. If you’re planning to watch the docuseries, you should definitely take a look at what the critics have to say about Depp V. Heard.The critical response to the latest docu series on Netflix has been a mixed set of reactions. While some are lauding the never-seen-before aspects of the case showcased in the series, others have called out the incomplete and biased portrayal of the defamation case.",
              blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/depp-v-heard-review.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
  
          },
  
        ]
      )
    return (
        <BlogData.Provider value={{bollyWoodBlog, hollyWoodBlog}}>
            {props.children}
        </BlogData.Provider>
    )
}

export default BlogDataBase
