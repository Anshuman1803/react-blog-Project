import React from 'react'
import { useState, createContext } from 'react'

export const BlogData = createContext();
function BlogDataBase(props) {

    const [bollyWoodBlog] = useState(

        [
            {
                blogCategory: 'Bollywood',
                BlogId: 1,
                blogTitle: "MS Dhoni The Untold Story: When Sushant Singh Rajput recalled his memorable moment with Dhoni and drew similarities between them",
                blogDesc: "Sushant Singh Rajput was the most sought-after actor in the industry. The late actor kept the audience entertained having featured in several movies within the time span he served. His movie M.S. Dhoni: The Untold Story. was critically acclaimed. He was appreciated for portraying the real-life character of Mahendra Singh Dhoni without errors. To get into the skin of the character Rajput stayed with the Indian cricketer and observed him. Throwback to the time of MS Dhoni movie release and SSR spoke his heart out.Mahendra Singh Dhoni, celebrating his 42nd birthday today, was equally involved in making his biopic. He patiently answered all of Sushant Singh Rajput's questions, doubts. The actor knew Dhoni before the film but got to observe him closely and portray him on big screens. While shooting for the film both spent the majority of their time together and had moments.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/07/MS-DHoni-1.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 2,
                blogTitle: "Akshay Kumar addresses the noise around his return as one of the top faces of a tobacco brand; slams fake news",
                blogDesc: "Fans were surprised to see Akshay Kumar in a new TVC for a tobacco brand that also featured Shah Rukh Khan and Ajay Devgn. The three superstars got immense flak when the first ad featuring the trio came out. Akshay Kumar got slammed left, right and centre as he is known to be a fitness icon. In his interviews, he is always talking about a healthy lifestyle. People felt that a public figure with his messaging should not have done that commercial. He later apologized for the same, and said he would not benefit from the sum he earned from the commercial. He gave it for charity. Yesterday, the new TVC of Vimal Zubaan Kesari was out. Akshay Kumar was present there as well. This left netizens wondering if he had gone back on his word.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Akshay-Kumar.png?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 3,
                blogTitle: "'Nushrat Bharucha herself is a cannon', Rakhi Sawant reacted when the actress got stuck in Israel",
                blogDesc: "When paparazzi asked Rakhi Sawant about Nusrat Bharucha being stuck in Israel, she was surprised. Rakhi Sawant says, 'What is the use of Nusrat Bharucha in the war between Israel and Palestine.' On this the paparazzi says that she had gone there for some work. Then Rakhi Sawant says, 'I think Nusrat Bharucha herself is a cannon and which country did she go from?' On this the paparazzi says that she had gone to Israel from India. Then Rakhi Sawant says, 'Nushrat Bharucha is a cannon, so whether she had gone from Israel or Palestine.' Paparazzi say that she went to Israel from India to shoot. Rakhi Sawant says, 'Went to shoot in Israel. Thank God she came back safely. Don't take tension, only Israel will win.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Untitled-design-29.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },


            {
                blogCategory: 'Bollywood',
                BlogId: 4,
                blogTitle: "Rekha was adamant on divorce from husband Mukesh Agarwal after a few months of marriage, secretary Farzana became the reason?",
                blogDesc: " Veteran Bollywood actress Rekha is celebrating her 69th birthday today. Rekha, who has worked in more than 180 films, was born on 19 October 1954. Rekha entered the world of acting at the age of just 4 years. The actress entered Bollywood in the year 1979 with the film 'Sawan Bhado', which proved to be a superhit at the box office. After this Rekha appeared in many superhit films. However, this Bollywood beauty remained in the news more for her personal life than her films. Rekha's name was associated with Jeetendra, Kiran Kumar, Vinod Mehra, Sanjay Dutt and Akshay Kumar in her career. Apart from this, Rekha's affair with married Amitabh Bachchan also made a lot of headlines. However, when Rekha married businessman Mukesh Aggarwal on March 4, 1990, everyone was surprised.",

                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Collage-Maker-09-Oct-2023-09-41-PM-7474.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
            },


            {
                blogCategory: 'Bollywood',
                BlogId: 5,
                blogTitle: "Ganapath trailer: Tiger Shroff, Kriti Sanon get thumbs up from fans; amazing VFX and action sequences impress",
                blogDesc: "Tiger Shroff and Kriti Sanon starrer Ganapath: A Hero is Born’s trailer released today. The film has been the most awaited one and finally fans got to see a glimpse of it today. The trailer is always an important part of the film as it decides how the film will be. People often watch the trailer and then only decide to go for the movie. If the trailer is impressive, the movies definitely does the best at the Box Office. And, Ganapath’s trailer has done the job.Yes, the trailer has been quite impressive. The trailer shows a glimpse of the dystopian society and how Tiger’s character will protect the people from evil things. Tiger is seen involved in some amazing action scenes and later we see Kriti Sanon in a never seen before avatar",

                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/MicrosoftTeams-image-52.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 6,
                blogTitle: "Jawan star Nayanthara wishes her twins on their first birthday with a long emotional note",
                blogDesc: "Jawan star Nayanthara is right now in the happiest phase of her life, personally and professionally. The actress who is bashing super divas in her Bollywood debut film Jawan is in celebratory mode as her lifelines, her babies, and her twins have turned one. Nayanthara, who is a happy mother before anything else, took to her Instagram account and shared a long emotional note for her twins Ujir and Ulag on their duet birthdays. Nayanthara opened her heart out and revealed everything that she feels about her kids.",
                blogImg: 'https://assets.thehansindia.com/h-upload/2022/06/09/500x300_1296870-vignesh.webp'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 7,
                blogTitle: "Naga Chaitanya’s latest post sparks patch up rumours with ex wife Samantha Ruth Prabhu",
                blogDesc: "JNaga Chaitanya and Samantha Ruth Prabhu are once again making headlines, and this time fans believe that the ex-couple is planning to get back together. The latest post shared by Chay on his Instagram once again sparked their patch-up rumours, and fans cannot contain their excitement. The Laal Singh Chaddha actor shared the picture of the pet and mentioned 'vibe' in his caption, and it looks like the ex-couple is co-parenting their pet. Samantha's pet Hash is with Chay, and the actor is spending some good time with him while the Kushi actress is away for work.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/anupamaa-nehha-pendse-5.png?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 8,
                blogTitle: "Gadar 2 effect: Sunny Deol starrer along with Aamir Khan gets a whopping offer from OTT giant?",
                blogDesc: "Gadar 2 is creating waves at the box office even on the 5oth day of release. The film is creating history each day and so far has earned 524.75 crore, has defeated Shah Rukh Khan starrer Pathaan, and is inching towards Jawan. And this massive success has had a positive effect on Sunny Deol's career. This is the highest phase of Sunny Deol's 22 long years of career, and he rightly deserves it. While now the latest update about the star is that his next film, which is produced by Aamir Khan, has got an offer of a whooping amount of Rs 95 crore from an OTT giant, this is an extremely insane feeling for Sunny Deol himself.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Sojo-3.png?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 9,
                blogTitle: "Alia Bhatt adorably holding Raha Kapoor on their mommy-baby day out is too cute to miss",
                blogDesc: "Alia Bhatt was spotted in town today along with her little daughter, Raha Kapoor, and what made fans melt their hearts was the way Alia was adorably holding her little one in her arms. The paparazzi managed to capture the cute mommy and daughter in the town, and we cannot get enough of their cuteness. Alia was seen leaving her house and making her way into the car. It looks like Raha's going out today, and we wonder if the little one has gone to Kareena Kapoor Khan's house for a playdate with her brothers Taimur and Jeh. Alia Bhatt was seen wearing a cool pastel-coloured shirt and pant while Raha was matching the outfit with her mommy, and those cute two ponytails of the little one are definitely something you cannot miss.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/MicrosoftTeams-image-2023-10-08T151403.285.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 10,
                blogTitle: "Kareena Kapoor Khan begins shooting for Singham Again; Ranveer Singh aka Simmba reveals a common connection",
                blogDesc: "Rohit Shetty has begun shooting for his next in the cop-verse, which is Singham Again also known as Singham 3. The upcoming new movie will have Ajay Devgn reprising his role as Bajirao Singham with Ranveer Singh returning as Simmba. Akshay Kumar, Deepika Padukone and Kareena Kapoor Khan are also a part of the project. The shooting commenced on 16th September 2023 with Ajay and Ranveer. The rest of the cast were scheduled to join later. Kareena Kapoor Khan has now joined the shoot of Singham Again She is standing in the middle of the road, all by herself. Bebo captioned the picture saying that she doesn't need to tell which movie she is shooting for. She praised the Rohit Shetty, calling the director one of her favourites. Kareena also reveals that this is her fourth film with Shetty and is sure that it is not going to be her last one.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Singham-Again.png?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 11,
                blogTitle: "Leo: Thalapathy Vijay, Lokesh Kanagaraj film's Telugu theatrical deal to be revised due to THESE films?",
                blogDesc: "One of the most anticipated movies to come during Dussehra is Leo. Thalapathy Vijay and Lokesh Kanagaraj have made one of the most hyped films of 2023. The trailer has got a great response so far. We can see Thalapathy Vijay in the main role of Leo Das. The action packed trailer also has Sanjay Dutt, Trisha and Arjun Sarja. Lokesh Kanagaraj has shot the film in the snow clad valleys of Kashmir. The CGI shots of Thalapathy Vijay fighting with a hyena have been appreciated as well. But it looks like there is a issue with theatrical rights in the Telugu belt.",
                blogImg: 'https://static.toiimg.com/thumb/msid-96935817,width-1280,resizemode-4/96935817.jpg'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 12,
                blogTitle: "Ramayana: Sunny Deol in talks to play Lord Hanuman to Ranbir Kapoor, Sai Pallavi's Ram and Sita?",
                blogDesc: "Ramayana to be made by Nitesh Tiwari is constantly making news. Ranbir Kapoor and Sai Pallavi have been roped in as the leads, as per reports. The movie will be shot in 2024. Yesterday, news came that Ranbir Kapoor will completely quit meat and consumption of alcohol as he gets into the character of Maryada Purushottam Lord Shri Ram. Now, an entertainment site has reported that the makers have approached Sunny Deol to play the role of Lord Hanuman. It seems Sunny Deol is in talks with the makers for the same. The veteran superstar is in demand after the phenomenal success of Gadar 2.As per Pinkvilla, the makers felt that no one other than Sunny Deol would be perfect for Lord Hanuman. The God is an embodiment of strength and no one else exemplifies it as nicely as Sunny Deol. His macho personality has millions of admirers all over India.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/FotoJet-2023-10-10T185645.009.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 13,
                blogTitle: "Timeless charisma of Amitabh Bachchan: Why Big B remains a fan favourite even at 81",
                blogDesc: "Amitabh Bachchan, the legendary Bollywood actor, celebrates his birthday on October 11. He been captivating audiences for decades. Even at the age of 81, he continues to hold a special place in the hearts of millions. From his powerful performances to his magnetic personality, here are the top five reasons why Amitabh Bachchan remains an eternal fan favourite.From intense dramas to light-hearted comedies, he effortlessly adapts to any role and brings characters to life with his sheer brilliance. His ability to emote and connect with audiences is unparalleled, leaving a lasting impact on viewers. Whether it's his powerful dialogue delivery or nuanced expressions, Bachchan's acting prowess has stood the test of time.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/Amitabh-Bachchan.png?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 14,
                blogTitle: "Is Priyanka Chopra planning a movie with her Kaminey director Vishal Bhardwaj?",
                blogDesc: "Piryanka Chopra Jonas has been making headlines a lot lately. Albeit, for all the wrong reasons. First, she got slammed for not attending cousin Parineeti Chopra's wedding with Raghav Chadha, then she was mired in the Joe Jonas and Sophie Turner divorce. There were reports that the actress has been having a tough time deciding which side to pick. We then heard about her opting out of Farhan Akhtar, Zoya Akhtar's Jee Le Zaraa, also starring Katrina Kaif and Alia Bhatt. But now, looks like there may some exciting news brewing for all PeeCee fans.Priyanka Chopra and Vishal Bhardwaj have met up in the US. The actress shared a picture on her Insta stories. In the pic, we can see her in black shirts, bralet with an orange top. Baby Malti Marie was in an orange tutu set. Vishal Bhardwaj and she were seated on what looked like a golf cart. The filmmaker has just released Khufiya on Netflix.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/FotoJet-2023-10-10T165129.139.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Bollywood',
                BlogId: 15,
                blogTitle: "Did Shahid Kapoor indirectly refer to Ranveer Singh, Deepika Padukone as 'insecure couple'? Actress' fans slam him",
                blogDesc: "One of Shahid Kapoor's interviews has been going viral on social media. He is in conversation with Anupama Chopra. He spoke about how his wife Mira Rajput has influenced his career. He said that she was adamant that he pick up the role of Kabir Singh, which resurrected his career, which was down with a number of flops. He also spoke about how his wife advises him to work with people who match his energy. Shahid Kapoor said that one worked in a film for almost a year, and the vibes of the set affected a person. He said that even though he was a professional, as a human, it is easy to get affected. Shahid Kapoor did not take the name of the Padmavaat couple but somehow people concluded that he was mentioning about them. There were rumours on how Shahid Kapoor was unhappy on the sets of the Sanjay Leela Bhansali film, and felt unhappy that his scenes were chopped off. Though he had a small role, people liked him immensely. Deepika Padukone and Ranveer Singh had also delivered memorable performances in the film.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/10/FotoJet-2023-10-10T154909.096.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

        ]
    );

    const [hollyWoodBlog] = useState(

        [
            {
                blogCategory: 'Hollywood',
                BlogId: 1,
                blogTitle: "Harry Potter actor Sir Michael Gambon aka Albus Dumbledore passes away at 82; fans say, 'Raise Your Wands",
                blogDesc: "Harry Potter fans are bereaved. Irish actor Sir Michael Gambon who played the famed head of Hogwarts Albus Dumbledore is six of the eight Harry Potter movies is no more. He died at 82 after a bout of pneumonia. Fans are heartbroken at this sad news. It seemed he died peacefully in his sleep. His widow Lady Gambon and son Fergus issued a short statement confirming the same. His family was by his side. He was the winner of four BAFTA awards. Sir Michael Gambon's demise has saddened millions of Potterheads the world over. His wise words have flooded social media has fans remember themIn his career, he has won Emmy and Tony award nominations too. He was knighted for his services in 1998. His last stage performance was in 2012.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-28T182505.641.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 2,
                blogTitle: "Joe Jonas responds to Sophie Turner’s allegation, denies claims that their daughters were 'abducted'",
                blogDesc: "The divorce between Sophie Turner and Joe Jonas took a bitter turn after the former filed a lawsuit against The Jonas Brothers’ singer and sued him for refusing their daughters’ return to the UK. The actor also claimed that she found out about Joe filing for divorce days after the reports went viral on social media. Following the allegations, Joe responded to the claims made by Sophie and called them ‘misleading’. In the lawsuit filed by Sophie Turner, the actor alleged that the father, Joe Jonas prevented the children’s return from US to UK, which is a “breach of the mother’s rights of custody” under the English law as the children’s habitual residence is the UK.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Collage-Maker-22-Sep-2023-07-24-AM-5012.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 3,
                blogTitle: "Jimmy Kimmel tests positive for COVID, cancels live show with Jimmy Fallon and Stephen Colbert",
                blogDesc: "COVID-19 has hit Jimmy Kimmel, the host of Jimmy Kimmel Live, again! Jimmy took to X, formerly called Twitter, to confirm the news. Besides announcing to his fans that he has tested positive for Coronavirus, Jimmy also confirmed that “this weekend's Strike Force Three show” have been called off.“Well, Las Vegas, I got Covid, and sadly, we need to cancel this weekend’s Strike Force Three show,” he tweeted.Jimmy, who thanked all his fans who bought tickets for the upcoming show, assured them that they’d get full refunds. The popular host also confirmed that his team would try to reschedule the show.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Collage-Maker-21-Sep-2023-10-00-AM-2476.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },


            {
                blogCategory: 'Hollywood',
                BlogId: 4,
                blogTitle: "Travis Kelce’s reaction to Taylor Swift references from NFL commentator goes viral",

                blogDesc: "When dating rumors begin to make headlines, fans do just about everything to look for confirmation. As many continue to wonder if Travis Kelce and Taylor Swift are actually dating, Kansas City Chiefs tight end has finally shared his response.Rumors about Travis dating Taylor began earlier this month after he gave her a bracelet that carried his phone number. Later, it was reported that both hung out in New York.",

                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/Collage-Maker-21-Sep-2023-09-05-AM-524.jpg?impolicy=Medium_Widthonly&w=1280&h=900'
            },


            {
                blogCategory: 'Hollywood',
                BlogId: 5,
                blogTitle: "Justin Bieber celebrates fifth wedding anniversary with Hailey Bieber: ‘You have captivated my heart’",
                blogDesc: "It is a special day for pop star Justin Bieber. For it marks his fifth wedding anniversary with wife Hailey Bieber. To celebrate five years of togetherness with Hailey, the ‘Yummy’ singer expressed his love for her in an emotional Instagram note.In the heartwarming note that Justin wrote, he explained how Hailey has “captivated” his heart.",

                blogImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PsK_z8sZ-xC3N2QiVMWMyK7AzCaOFsJObw&usqp=CAU'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 6,
                blogTitle: "Joe Jones, Sophie Turner officially confirm separation; the singer caught the actress on 'ring camera'?",
                blogDesc: "Joe Jonas and Sophie Turner were seen as an ideal couple by many. Today, the news came that they are headed for a separation. The couple have two very young children. As per Hollywood sources, their personalities just did not match. While Joe Jonas is described as a homebody, Sophie Turner is said to be the partying out-going type. Fans have had varied reactions on this. Many said that Joe Jonas and she dated for a considerable span of time before tying the knot. They wondered how he did not get that their personalities did not match? Sophie Turner has not done any project after Game Of Thrones. It is being assumed that she wants to get back in front of the camera.Sophie Turner said that being a mother is one of the best things in life. The Jonas' family has grown with these girls including Malti Marie Jonas. It seems Joe Jonas is going to file for active co-parenting where he can frequently visit the girls. The only settlement will be of their sprawling marital home.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-06T213150.819.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 7,
                blogTitle: "Aquaman and the Lost Kingdom teaser: Jason Momoa-starrer is high on mayhem and monsters",
                blogDesc: "JAhead of the full trailer of the much-anticipated movie of 2023 Aquaman and the Lost Kingdom which will be released on September 14, DC has released a brief teaser for its fans. The year 2023 may not have been easy for DC Comics following the box office failure of Shazam! Fury of the Gods, Blue Beetle, and The Flash. However, with Aquaman 2, things could turn in its favour!The teaser brings to DC fans Arthur Curry (Jason Momoa) as he gears up to combat new troubles. It is interesting to see him float, reign and guard the waters. “I’m gonna kill Aquaman” is the unsettling threat from Black Manta (Yahya Abdul-Mateen II) who is hellbent on destroying everything Aquaman holds. A few seconds later, Aquaman rises from the sea on a massive and blue seahorse. What’s unmissable is an octopus that clings to the seahorse. The teaser also brings to the viewers quick snapshots of his house on fire, underwater clashes, and new underwater enemies.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/jason.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 8,
                blogTitle: "BTS: Did Jungkook really break the smoking laws of California? Fact Check",
                blogDesc: "BTS member Jeon Jungkook has made headlines after his smoking video went viral. Jungkook was in Los Angeles, California for some work related commitments. The Golden Maknae of BTS apparently went for a meal to Matsuhisa, which is a restaurant popular with celebrities of Los Angeles. There were many who said that Jungkook broke the smoking laws of the state of California. As we know, laws in US states about smoking and non-smoking zones differ. Jungkook was seen outside the game of the eatery smoking with a staff member. Some also highlighted that he threw the stub of the cigarette on the streets.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/09/FotoJet-2023-09-10T183053.994.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 9,
                blogTitle: "Jungkook turns 26: Jimin wishes the Golden Maknae with a shirtless pic showing off his moon tattoo; netizens go, 'Damn' [Check Reactions]",
                blogDesc: "BTS member Jungkook has turned 26. The BTS ARMY is celebrating the occasion all over the globe. Wishes have started pouring in from the band members. Jimin has been the first to wish Jungkook on Instagram. He has posted a shirtless pic of the two. We can see the full moon tattoo on the back of Jimin. This is the first time that he has posted a back profile pic in this manner. Fans are wondering what the other members have in store for ARMY now. Needless to say, there is a meltdown and Jikook is trending like crazy.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/FotoJet.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 10,
                blogTitle: "Nick Jonas can’t get enough of these 3 Indian cuisines, can you guess?",
                blogDesc: "Nick Jonas’ love for India is known by all. Ever since he married Priyanka Chopra in 2018, the singer keeps posting videos of him grooving to Bollywood songs. The singer, who is currently on a tour with the Jonas Brothers, was quizzed by a fan after a recent concert about his favorite Indian cuisines. Nick went on impressing his Indian fans with his answers and proved why he is called the ‘national jiju of India’.In a video going viral on social media, a fan asked Nick about his favorite Indian dishes. To which he replied, “Oh I like Paneer, Lamb Biryani, and you know a Dosa, yeah I like Dosa.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/nick-jonas-news.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 11,
                blogTitle: "Deep V. Heard on OTT: Read what critics have to say about the documentary series that created a storm on social media",
                blogDesc: "One of the most talked about criminal trials of the century, the infamous defamation case between Hollywood stars and former couple Johnny Depp and Amber Heard became the most popular talking point across the globe last year. On Thursday, streaming giant Netflix released its own miniseries, a documentary based on the case titled Depp V. Heard. The three-part series showcased the testimonies of both the actors side-by-side for the first time and explored the trial that had social media users on their toes. If you’re planning to watch the docuseries, you should definitely take a look at what the critics have to say about Depp V. Heard.The critical response to the latest docu series on Netflix has been a mixed set of reactions. While some are lauding the never-seen-before aspects of the case showcased in the series, others have called out the incomplete and biased portrayal of the defamation case.",
                blogImg: 'https://st1.bollywoodlife.com/wp-content/uploads/2023/08/depp-v-heard-review.jpg?impolicy=Medium_Widthonly&w=1280&h=900'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 12,
                blogTitle: "The Batman Box Office (Worldwide): Robert Pattinson Starrer Is All Set To Touch $500 Million Milestone",
                blogDesc: "The Batman saw a drop during the week but picked up during its second weekend. According to BoxOfficeMojo, the Robert Pattinson starrer has collected $463,220,826 at the worldwide box office, which means that it is reaching the half a billion mark ($500 million). Only a few Hollywood hits like Spider-Man: No Way Home, No Time to Die, F9, and Venom: Let There Be Carnage have been able to hit that benchmark during the pandemic. If you’re planning to watch the docuseries, you should definitely take a look at what the critics have to say about Depp V. Heard.The critical response to the latest docu series on Netflix has been a mixed set of reactions. While some are lauding the never-seen-before aspects of the case showcased in the series, others have called out the incomplete and biased portrayal of the defamation case.",
                blogImg: 'https://assets-prd.ignimgs.com/2022/01/26/thebatman-newbutton-1643232430643.jpg'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 13,
                blogTitle: "Lily Collins pens note on 2nd wedding anniversary with Charlie McDowell: ‘Thank you for being the greatest partner’",
                blogDesc: "One of the most talked about criminal trials of the century, the infamous defamation case between Hollywood stars and former couple Johnny Depp and Amber Heard became the most popular talking point across the globe last year. On Thursday, streaming giant Netflix released its own miniseries, a documentary based on the case titled Depp V. Heard. The three-part series showcased the testimonies of both the actors side-by-side for the first time and explored the trial that had social media users on their toes. If you’re planning to watch the docuseries, you should definitely take a look at what the critics have to say about Depp V. Heard.The critical response to the latest docu series on Netflix has been a mixed set of reactions. While some are lauding the never-seen-before aspects of the case showcased in the series, others have called out the incomplete and biased portrayal of the defamation case.",
                blogImg: 'https://www.hindustantimes.com/ht-img/img/2023/09/05/550x309/lilly_collins_1693877201507_1693877201884.jpg'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 14,
                blogTitle: "Harry Potter and the Goblet of Fire",
                blogDesc: "One of the most talked about criminal trials of the century, the infamous defamation case between Hollywood stars and former couple Johnny Depp and Amber Heard became the most popular talking point across the globe last year. On Thursday, streaming giant Netflix released its own miniseries, a documentary based on the case titled Depp V. Heard. The three-part series showcased the testimonies of both the actors side-by-side for the first time and explored the trial that had social media users on their toes. If you’re planning to watch the docuseries, you should definitely take a look at what the critics have to say about Depp V. Heard.The critical response to the latest docu series on Netflix has been a mixed set of reactions. While some are lauding the never-seen-before aspects of the case showcased in the series, others have called out the incomplete and biased portrayal of the defamation case.",
                blogImg: 'https://flxt.tmsimg.com/assets/p90599_p_v8_aq.jpg'

            },

            {
                blogCategory: 'Hollywood',
                BlogId: 15,
                blogTitle: "Alice in Wonderland",
                blogDesc: "One of the most talked about criminal trials of the century, the infamous defamation case between Hollywood stars and former couple Johnny Depp and Amber Heard became the most popular talking point across the globe last year. On Thursday, streaming giant Netflix released its own miniseries, a documentary based on the case titled Depp V. Heard. The three-part series showcased the testimonies of both the actors side-by-side for the first time and explored the trial that had social media users on their toes. If you’re planning to watch the docuseries, you should definitely take a look at what the critics have to say about Depp V. Heard.The critical response to the latest docu series on Netflix has been a mixed set of reactions. While some are lauding the never-seen-before aspects of the case showcased in the series, others have called out the incomplete and biased portrayal of the defamation case.",
                blogImg: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F4BD6991B21975E4A57D6385120C5E7BEE5B04CA54AB3DC9847B5CB661D9D306/scale?width=1200&aspectRatio=1.78&format=jpeg'

            },

        ]
    );

    const [fitenessBlog] = useState([
        {
            blogCategory: 'Fitness',
            BlogId: 1,
            blogTitle: "TOP 5 PUSH UP VARIATIONS THE BEST PRESSING VARIATIONS FOR STRENGTH, SIZE, AND POWER!",

            blogDesc: "Oftentimes the Barbell Bench Press is hailed as the king of pressing exercises and while I may be tempted to agree; I still to this day believe the Push Up and it’s many variations to remain the undisputed champion for the press category. The push up pattern creates an ideal environment for improving your pressing strength and skill due to the closed chain biomechanics of the shoulders. The massive benefits to programming push ups should NEVER be overlooked in any type of health, fitness or performance program. With hands stable on a solid surface, kinematics of the shoulder complex change, freeing the shoulder blades to dynamically stabilize and move on the thoracic cage while reducing stress on the front side of the true shoulder joint.plates, chains, whatever you got over the lower back instead. This will work the core harder AND integrate the lower body. Train for strength in the 6-12 rep ranges and muscular hypertrophy in the 12-20 rep range while adding appropriate load.",

            blogImg: 'https://drjohnrusin.com/wp-content/uploads/2023/04/article-cover-photo.png'

        },

        {
            blogCategory: 'Fitness',
            BlogId: 2,
            blogTitle: "TOP 5 FUNCTIONAL SINGLE LEG EXERCISES A SINGLE LEG VARIANT FOR ANY GOAL",

            blogDesc: "Single leg work is one of the most beneficial and effective movement patterns that should be in any training program for building functional strength, packing on muscle, improving performance, and enhancing health and longevity.When it comes to single leg work, you’ll want to divide up your training into both split squats and lunges (stationary versus moving single leg variations) and incorporate varieties of weight placement, forms of resistance, planes of motion, ranges of motion, and tempos for maximal benefits.Without further ado, here’s my top 5 functional single leg exercises designed to improve function, pack on size, improve your performance, and durability.With the goal of muscular hypertrophy or self hatred, you can alter from your strongest stance to bias specific regions, muscles or actions to fit your needs as the loading is lower and the ranges are higher between 8-15 reps taken to form failure. This may look like front foot heel elevation for more of a quadriceps bias.",

            blogImg: 'https://drjohnrusin.com/wp-content/uploads/2023/04/top-5-functional-single-leg-excercises.jpg'

        },

        {
            blogCategory: 'Fitness',
            BlogId: 3,
            blogTitle: "FULL RANGE OF MOTION FOREVER FORGET 90-DEGREES",

            blogDesc: "Forget this 90-degree nonsense that defies every established principle of biomechanics, movement anatomy, neurophysiology and motor skill development that’s been producing muscle, strength and resilience results for hundreds of years. But to avoid absolutist black and white “do THIS, not THAT” context, I believe that partial range of motion deserves a more nuanced discussion surrounding the range of motion spectrum, and how best to navigate it for gains across the board.When did strength training get so fucking complicated? Remember the days where you went into the gym, had a plan to learn some big lifts, perfect your form and add a little weight to that great form as you got stronger and needed more stimulus?The above outlines a pretty clear cut scenario for intelligently training according to the range of motion spectrum. But this entire “debate” if you want to call it that begs the question.",

            blogImg: "https://d32ydbgkw6ghe6.cloudfront.net/production/uploads/cover_images/c8c39f18ef73684cbd18ab81a4ed33a2815a/i1080x475.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 4,
            blogTitle: "LAT PULLDOWNS DON’T TRAIN THE LATS? DEBUNKING THIS DUBIOUS LAT PULLDOWN CLAIM",

            blogDesc: "Claiming that Lat pulldowns don’t train the LATS is quite literally one of the dumbest things I’ve ever heard. Next thing you know we’ll have IG influencers claiming triceps extensions don’t train the triceps, biceps curls don’t train the biceps, abdominal crunches don’t train the abs, and calf raises don’t train the calves. This sensationalizing of the ineffectiveness of simple staple NAME SAKE exercises needs to stop. Because the reality is, biomechanics and human anatomy has NOT changed in hundreds of thousands of years. And certainly NOT in our lifetime.In isolation, the lat’s textbook action is to adduct, extend and internally rotate the humerus (upper arm bone). If you dive into the anatomical actions of the lats one layer deeper you’ll learn that the lats also play a secondary roll in rotation and stabilization of the torso (upper and lower) along with the pelvis.",

            blogImg: "https://drjohnrusin.com/wp-content/uploads/2022/03/lat-pulldowns.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 5,
            blogTitle: "HOW MUCH DOES PERSONAL TRAINING COST? IN-PERSON, ONLINE AND EVERYTHING IN-BETWEEN",

            blogDesc: "I know, this can be a tough conversation with yourself if you aren’t used to debating what you deserve. For that reason, I am going to give you 5 direct categories to help you better gauge how much you should be charging for your time.If you are training in a certain region anywhere in the world, it’s important to know what the going rate is within a 15 mile radius. Without this information, you are really operating in the dark.The current local rate is the baseline number you can operate off of when creating your hourly rate from the beginning. Plenty of big box gyms have already done hours and hours of market research to find out what the appropriate number is – so use that.Finding this number shouldn’t be difficult either. Contact or find out the pricing from 5 of the local gyms in the area by you.Keep in mind, the remaining four variables will adjust the price up or even down based on the other things you are bringing to the table. Honestly, rarely does the price go down from here unless you are teaching jumping jacks in the park.",

            blogImg: "https://drjohnrusin.com/wp-content/uploads/2021/12/coaching.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 6,
            blogTitle: "WHY WORKOUTS DON’T WORK FOR HEALTH & LONGEVITY AND WHAT TO DO INSTEAD...",

            blogDesc: "“You just need to workout more!” Surely that’s the golden ticket to health, performance, longevity and transforming your physique, right? Absolutely not. If it were that easy, we wouldn’t be seeing the atrocious obesity and other preventable lifestyle disease problems that have stricken today’s society with no real notable hope in sight for remediation.But this simple idea that one must simply burn more calories by any means possible while likely forcing themselves into a highly restrictive and unhealthy diet simultaneously is unfortunately the idea that today’s mainstream fitness industry has been built on.This dubious combination of punishing workouts that are deemed “successful” only by the calorie output on a device and a tortuous eating existence rallied behind how many days are left until this “diet” is done is downright dangerous.And did I mention that it’s also one of the LEAST effective ways to lose weight, build your health or extend longevity with an improved lifestyle and skill set around training and nutrition that will serve you for a lifetime?",

            blogImg: "https://drjohnrusin.com/wp-content/uploads/2021/10/workouts.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 7,
            blogTitle: "5 Ways Pilates Can Ease Menopause Hip Pain & The Connection Between Menopause and Hip Pain",

            blogDesc: "Menopause hip pain is among the many symptoms experienced during this time of life, next to hot flashes, hormonal changes, breast tenderness, and painful intercourse. It might not occur to you, but many female reproductive organs are located between the hip bones, in the pelvic cavity. This is why you might feel pain, soreness, or lack of mobility in this area during this time of transition for your body. While I am not yet in this season myself, Lindywell serves all generations. It’s frustrating to know that perimenopause and menopause are some of the least discussed (and least researched) experiences—and yet it’s a significant season of a woman’s life that brings about very real symptoms. Among the variety of bodily changes experienced at this time, hip pain is something we hear about a lot.Women who have completed menopause are susceptible to a condition known as gluteal tendinopathy. This causes the tendon tissues in your hips and glutes to deteriorate, resulting in musculoskeletal pain and inflammation. ",

            blogImg: "https://lindywell.com/wp-content/uploads/2023/10/AdobeStock_506378705.jpeg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 8,
            blogTitle: "WHAT TO EXPECT IN THE GYM WHEN YOU’RE EXPECTING",

            blogDesc: "I know what some of you may be thinking: What does someone who has succumbed to male pattern baldness, hates The Notebook1, and pees standing up know about the female body, let alone speaking to something that’s arguably the most precious, magical, and delicate time of a woman’s life?Regardless of one’s experience in the gym, whether they’re a seasoned veteran or a newbie, I always instruct the women I work with to listen to their body. After a few hundred thousand years of evolution, the human body is pretty smart, resilient, and will let you know when it’s pissed off or doesn’t like something.Now, I’m not insinuating that every expecting mother out there should go out and try to hit a deadlift PR on a weekly basis or snatch a mack truck over their head. But I’m certainly in the camp that feels we can offer a lot more than simply telling them to “go walk on the treadmill” or what mounts to playing patty cake for shits and giggles.",

            blogImg: "https://tonygentilcore.com/wp-content/uploads/2016/10/128857154_l_normal_none-1536x1057.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 9,
            blogTitle: "EVERYTHING AND NOTHING CAUSES LOW BACK PAIN",

            blogDesc: "Have ten different doctors or physical therapists work with the same patient and it’s likely you’ll get ten different opinions as to what the root cause is and what tactics need to be implemented to resolve it.“Fact of the matter is: there is NO one right way. it’s a big mistake to lump all LBP into the same category and even a bigger mistake to assume all of it presents the same or should be treated the same.”This isn’t to say there aren’t extenuating circumstances where taking a chill pill is absolutely the right choice; sometimes we do need to back off and allow the body a window of time to heal or reduce pain/swelling/symptoms.That said, I think it’s lame when a medical professional tells someone to “rest,” or worse, informs them that they’ll need to learn to “live with low back pain.”It’s a defeatist attitude and will spell game over for many people. Before you know it they’re living on a foam roller and thinking about a “neutral spine” while washing their hands.",

            blogImg: "https://tonygentilcore.com/wp-content/uploads/2016/10/low-back-pain-1024x708.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 10,
            blogTitle: "SHOULD YOU USE STRAPS WHEN DEADLIFTING? ",

            blogDesc: "I know this will surprise a lot of people when I say this, but I didn’t perform my first (real) deadlift until 2002 when I was 25 and still wet behind the ears with regards to my fitness career.It didn’t take long for me to become enamored with the deadlift. I loved that I was actually good at it, and I really loved how it made my body look and feel. It wasn’t long before I made it my mission to pull 500 lbs. It took me a little over a year to get there.A LOT of people deadlift with a mixed grip, and A LOT of people never tear their bicep tendon. Much the same that a lot of people drive their cars and never get into an accident.Offhandedly, straps do tend to slow people down which could be argued as a hinderance to performance. One mistake I see some trainees make with their setup is that they’ll bend over, grab the bar, and take way too long before they start their actual pull.",

            blogImg: "https://tonygentilcore.com/wp-content/uploads/2014/12/96290639_l-1536x1025.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 11,
            blogTitle: "TEXTBOOK TECHNIQUE AND WHY IT DOESN’T EXIST ",

            blogDesc: "It’s not lost on me that the title of this post will raise some eyebrows. The title shouldn’t be taken too literally, because I do feel there are ideal approaches, methodologies, and “rules” to consider when coaching any lift in the weight room.That said, when it comes to exercise technique (or human movement in general) why are textbooks the metric at which we compare everything?However, we don’t live in textbooks. What a squat, sprint, overhead press (or hell, even a carrot cake) looks like in a textbook can (and usually is) a stark contrast from what is emulated in real life.Likewise, someone with a vast and delicate history of lower back issues is not going to take the same path as someone with a “clean” health history. And, of course, other factors come into play such as goal(s), movement quality,I’m interested in making people savages, but I’m also interested in the long-game.  ",

            blogImg: "https://tonygentilcore.com/wp-content/uploads/2017/06/deadlift-grip-1024x683-825x386.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 12,
            blogTitle: "fitness freak celebrities in India",

            blogDesc: "At the age of 63, Anil Kapoor is considered to be one of the fittest actors in Bollywood and there's absolutely no denying that. On Friday, the actor shared pictures from his home work out session on Instagram, along with a detailed note about his fitness regime. Anil Kapoor talked about how the lockdown brought out best in him, on the fitness front and wrote: I was never into weightlifting nor did I take rest days so seriously but this lockdown has definitely been a learning curve for me in many ways and this is one of them.",

            blogImg: "https://assets.gqindia.com/photos/5f3e6a03b74db60fdc97b357/master/pass/anil%20kapoor%20exercises%20work%20out%20top%20shape%2063%20age%20defying%20ageing.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 13,
            blogTitle: "Heat-proof your heart: Exercise tips to shield against heat-related cardiovascular events ",

            blogDesc: "It’s not lost on me that the title of this post will raise some eyebrows. The title shouldn’t be taken too literally, because I do feel there are ideal approaches, methodologies, and “rules” to consider when coaching any lift in the weight room.That said, when it comes to exercise technique (or human movement in general) why are textbooks the metric at which we compare everything?However, we don’t live in textbooks. What a squat, sprint, overhead press (or hell, even a carrot cake) looks like in a textbook can (and usually is) a stark contrast from what is emulated in real life.Likewise, someone with a vast and delicate history of lower back issues is not going to take the same path as someone with a “clean” health history. And, of course, other factors come into play such as goal(s), movement quality,I’m interested in making people savages, but I’m also interested in the long-game.  ",

            blogImg: "https://www.hindustantimes.com/ht-img/img/2023/08/15/550x309/unsplash-c59hEeerAaI-unsplash_1692109388258_1692109413218.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 14,
            blogTitle: "Can Aerobic Exercise Improve Cognitive Function and Decrease Alzheimer's Disease Risk?",

            blogDesc: "It’s not lost on me that the title of this post will raise some eyebrows. The title shouldn’t be taken too literally, because I do feel there are ideal approaches, methodologies, and “rules” to consider when coaching any lift in the weight room.That said, when it comes to exercise technique (or human movement in general) why are textbooks the metric at which we compare everything?However, we don’t live in textbooks. What a squat, sprint, overhead press (or hell, even a carrot cake) looks like in a textbook can (and usually is) a stark contrast from what is emulated in real life.Likewise, someone with a vast and delicate history of lower back issues is not going to take the same path as someone with a “clean” health history. And, of course, other factors come into play such as goal(s), movement quality,I’m interested in making people savages, but I’m also interested in the long-game.  ",

            blogImg: "https://www.hindustantimes.com/ht-img/img/2023/08/13/550x309/jose-vazquez-UUf5nxhEhAs-unsplash_1691902832180_1691902858091.jpg"

        },

        {
            blogCategory: 'Fitness',
            BlogId: 15,
            blogTitle: "Morning workout & New Exercises and Activities to Try If You Have MS",

            blogDesc: "It’s not lost on me that the title of this post will raise some eyebrows. The title shouldn’t be taken too literally, because I do feel there are ideal approaches, methodologies, and “rules” to consider when coaching any lift in the weight room.That said, when it comes to exercise technique (or human movement in general) why are textbooks the metric at which we compare everything?However, we don’t live in textbooks. What a squat, sprint, overhead press (or hell, even a carrot cake) looks like in a textbook can (and usually is) a stark contrast from what is emulated in real life.Likewise, someone with a vast and delicate history of lower back issues is not going to take the same path as someone with a “clean” health history. And, of course, other factors come into play such as goal(s), movement quality,I’m interested in making people savages, but I’m also interested in the long-game.  ",

            blogImg: "https://studyfinds.org/wp-content/uploads/2020/03/man-in-gray-jacket-doing-push-ups-during-sunrise-3775164-816x520.jpg"

        },
    ]);

    const [technologyBlog] = useState([

        {
            blogCategory: 'Technology',
            BlogId: 1,
            blogTitle: "This week in data: AI stack tricks, generative AI adoption, the future of composability",

            blogDesc: "Every company wants to be a platform company — but not all can be.The push up pattern creates an ideal environment for improving your pressing strength and skill due to the closed chain biomechanics of the shoulders. The massive benefits to programming push ups should NEVER be overlooked in any type of health, fitness or performance program. TGenerative AI has unlocked new possibilities for customer and employee experiences — and as a result, customer and employee expectations have grown. Customers want solutions that enable flawless self-service and offer immediate and accurate advice, while employees want technology that lets them deliver better, more efficient experiences and support them in gaining stronger proficiency behind the scenes.It can be a trickier proposition than it seems, says Bonnie Chase, senior director, service product marketing at Coveo.",

            blogImg: 'https://venturebeat.com/wp-content/uploads/2021/03/databases.jpg?fit=750%2C375&strip=all'

        },

        {
            blogCategory: "Technology",
            BlogId: 2,
            blogTitle: " AI App Puts New Life in Old Photos",
            blogImg: "https://www.technewsworld.com/wp-content/uploads/sites/3/2021/05/xl-2021-my-heritage-1.jpg",
            blogDesc: "Nostalgia website MyHeritage has launched a new service that allows you to create lifelike animations of faces in still photos. The AI-powered service called Deep Nostalgia, launched last week, is free to try and is remarkably accurate in depicting how a person would look if captured on video. Their eyes blink, their head moves and their mouth forms a smile.",
        },

        {
            blogCategory: "Technology",
            BlogId: 3,
            
            blogTitle: "Stuart Russell wrote the textbook on AI safety. He explains how to keep it from spiraling out of control.",

            blogDesc: "One of the hardest parts of the news business is striking a balance between covering stories that seem important in the moment and covering stories that you know will truly matter in the future. And it’s hard because the most consequential things happening right now are often boring or difficult to explain.Artificial intelligence is a good example of this sort of challenge. The ongoing revolution in AI is unfolding so quickly that it’s hard to keep up, even if you’re trying. Chat GPT-4, for instance, was released in March of this year and it stunned almost everyone who used it. If this latest large language model is a sign of what’s coming, it’s easy to imagine all the ways it might change the world — and then there are all the ways it might change the world that we can’t imagine.",

            blogImg: "https://cdn.vox-cdn.com/thumbor/0mpxWFZRUF37P8_dMxPKRD-ERzc=/0x0:1620x1080/920x613/filters:focal(934x507:1192x765):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72667894/Getty_Marina.0.jpg",
        },

        {
            blogCategory: "Technology",
            BlogId: 4,
            
            blogTitle: "AMD acquires open-source AI software pioneer Nod.ai to fortify AI capabilities.",

            blogDesc: "Advanced Micro Devices (AMD) announced today plans to acquire Nod.ai, a startup that specializes in optimizing AI software for high-performance hardware. The agreement underscores AMD’s growth strategy in the AI sector, which is centered on an open software ecosystem that simplifies the adoption process for customers through developer tools, libraries, and models. This acquisition adds another feather to AMD’s cap as it continues its expansion into the rapidly evolving AI industry.AMD has been investing heavily in AI technologies in recent years , such as CDNA, XDNA, RDNA and Zen architectures, to compete with rivals like Nvidia and Intel in the fast-growing AI market. ",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/nuneybits_vector_art_of_AMD_chip_0a708735-1cc4-46b4-8c92-26f87d7aab67-1-transformed.png?fit=750%2C600&strip=all",
        },

        {
            blogCategory: "Technology",
            BlogId: 5,
            
            blogTitle: "Researchers turn to Harry Potter to make AI forget about copyrighted material.",

            blogDesc: "As the debate heats up around the use of copyrighted works to train large language models (LLMs) such as OpenAI’s ChatGPT, Meta’s Llama 2, Anthropic’s Claude 2, one obvious question arises: can these models even be altered or edited to remove their knowledge of such works, without totally retraining them or rearchitecting them? As the Microsoft researchers write: “While the model took over 184K GPU-hours to pretrain, we show that in about 1 GPU hour of finetuning, we effectively erase the model’s ability to generate or recall Harry Potter-related content.” This work provides an important step toward adaptable language models. The ability to refine AI over time according to shifting organizational needs is key to long-term, enterprise-safe deployments.",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/cfr0z3n_child_wizard_with_dark_hair_and_glasses_waves_a_wand_an_5e85ac77-f867-4fde-84ed-22aa8c214dc4.png?fit=750%2C420&strip=all",
        },

        {
            blogCategory: "Technology",
            BlogId: 6,
            
            blogTitle: "DeepMind’s ‘remarkable’ new AI controls robots of all kinds, VentureBeat presents: AI Unleashed.",

            blogDesc: "One of the big challenges of robotics is the amount of effort that has to be put into training machine learning models for each robot, task, and environment. Now, a new project by Google DeepMind and 33 other research institutions aims to address this challenge by creating a general-purpose AI system that can work with different types of physical robots and perform many tasks.To overcome this and make it far easier and faster to train and deploy robots, the new project, dubbed Open-X Embodiment, introduces two key components: a dataset containing data on multiple robot types and a family of models capable of transferring skills across a wide range of tasks. The researchers put the models to the test in robotics labs and on different types of robots, achieving superior results in comparison to the commonly used methods for training robots .",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/cfr0z3n_a_central_glowing_computer_server_is_surrounded_by_many_c3b95670-9e77-4767-994d-4a3c17855ed8.png?fit=750%2C420&strip=all",
        },

        {
            blogCategory: "Technology",
            BlogId: 7,
            
            blogTitle: "OpenAI CEO Sam Altman foresees ‘breathtaking’ scientific discoveries, muses on geoengineering",

            blogDesc: "OpenAI co-founder and CEO Sam Altman wasn’t a well known figure outside of the tech sector until recently, but following his company’s rapid ascent to the top of the competitive generative AI landscape propelled by its hit product ChatGPT, and his own “world tour” visiting politicians in different countries, he is becoming an increasingly important and influential voice on the global landscape. Clearly, despite some recent alarming news when it comes to climate change (we just experienced the hottest September on record by a long shot), and ongoing global economic issues and geopolitical tensions, Altman is encouraged by scientific progress and humanity’s potential for technological advancement. Time will tell if his view is warranted.An exclusive invite-only evening of insights and networking, designed for senior enterprise executives overseeing data stacks and strategies.",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/Screenshot-2023-10-05-at-2.07.33-PM.png?fit=750%2C425&strip=all",
        },

        {
            blogCategory: "Technology",
            BlogId: 8,
            
            blogTitle: "IBM propels PyTorch beyond model training into AI inference",

            blogDesc: "The open source PyTorch machine learning (ML) framework is widely used today for AI training, but that’s not all it can do. IBM sees broader applicability for PyTorch and is working on a series of development initiatives that will see PyTorch used for inferencing.In an exclusive interview with VentureBeat, Raghu Ganti, principal research staff member at IBM detailed new research efforts that enable PyTorch to become a more viable enterprise option for inference. The market for inferencing technology software today has multiple players, with perhaps none larger than Nvidia’s Triton inferencing server. IBM’s goal with its PyTorch research is not necessarily to displace other technologies, but to provide a new open source alternative for inference that will run on multiple vendor technologies, as well as on both GPU and CPUs.Much of the community has been looking at PyTorch as a way to train models,” Ganti told VentureBeat.",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/nuneybits_vintage_advertisement_illustration_of_coding_assessme_58335005-b5e4-49e6-a0a0-08a990cc82be-transformed.png?fit=750%2C600&strip=all",
        },


        {
            blogCategory: "Technology",
            BlogId: 9,
            
            blogTitle: "Docker dives into AI to help developers build GenAI apps",

            blogDesc: "Underneath just about every generative AI application for training or inference today you’ll likely find Docker containers as the primary approach to deployment.Today at the Dockercon conference in Los Angeles, Docker Inc., the eponymous company behind the open source docker container technology, is taking a dive into the deep end of AI with a series of initiatives designed to help developers more rapidly build generative AI applications. Among the efforts is the launch of a new GenAI stack that integrates docker with the Neo4j graph database, LangChain model chaining technology and Ollama for running large language models (LLMs). The new Docker AI product is also debuting at Dockercon, as an integrated way for developers to get AI powered insights and direction for development with containers.",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/Screen-Shot-2023-10-04-at-5.20.26-PM.png?fit=750%2C465&strip=all",
        },

        
        {
            blogCategory: "Technology",
            BlogId: 10,
            
            blogTitle: "Reka launches Yasa-1, a multimodal AI assistant to take on ChatGPT",

            blogDesc: "Reka, the AI startup founded by researchers from DeepMind, Google and Meta, has announced Yasa-1, a multimodal AI assistant that goes beyond text to understand images, short videos and audio snippets.Available in private preview, Yasa-1 can be customized on private datasets of any modality, allowing enterprises to build new experiences for a myriad of use cases. The assistant supports 20 different languages and also brings the ability to provide answers with context from the internet, process long context documents and execute code.It comes as the direct competitor of OpenAI’s ChatGPT, which recently got its own multimodal upgrade with support for visual and audio prompts.“I’m proud of what the team has achieved, going from an empty canvas to an actual full-fledged product in under 6 months,” Yi Tay, the chief scientist and co-founder of the company, wrote on X (formerly Twitter). ",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/cfr0z3n_abstract_representation_of_sound_waves_film_strips_and__96931419-9a47-4314-91df-e0fb713b91b9.png?fit=750%2C420&strip=all",
        },


        
        {
            blogCategory: "Technology",
            BlogId: 11,
            
            blogTitle: "Canva adds generative video with Runway and new AI-powered Magic Studio",

            blogDesc: "Canva, the Australian online graphic design and multimedia company whose web-based platform is used by numerous media organizations worldwide to create graphics and multimedia (including VentureBeat), is celebrating its 10th anniversary with a sweeping update of numerous AI features, including offering a new generative video tool through a partnership with AI video startup Runway ML.With Canva’s massive Magic Studio update announced today, users of the platform can access a feature called Magic Media that allows them to simply type text into a field or upload a still image. Then, Canva’s Runway integration will generate up to 18 seconds of video based on what the user provided. In the case of text, the video will be generated based on the words provided. In the case of a still image, the image will be used as the basis of the video and motion and camera movement applied. ",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/Canva_Magic-Studio_Magic-Edit.jpg?fit=750%2C422&strip=all",
        },


        
        {
            blogCategory: "Technology",
            BlogId: 12,
            
            blogTitle: "Dell customizes GenAI and focuses on data lakehouse",

            blogDesc: "Dell Technologies is growing its portfolio of generative AI products and services to help more of its customers harness the power of artificial intelligence.Today Dell announced a series of initiatives that expand on the company’s generative AI efforts that it has been incrementally rolling out since early 2023. Back in May, Dell announced Project Helix in partnership with Nvidia as an effort to bring the power of large language models (LLMs) to on premises environments with Dell hardware. A few months later in July, Dell and Nvidia announced the first fruits of the Project Helix effort with validated designs for running AI inference workloads and professional services to support enterprise deployments. Now Dell is going a step further with validated designs for model customization with Nvidia to help organizations fine tune AI.Dell is also now detailing its strategy for enabling data for generative AI, with an open data lakehouse platform that benefits from a partnership with data query platform vendor Starburst.",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/nuneybits_vector_art_of_data_lakehouse_0d37ee7c-7246-40f3-b788-4d0c1ae45705-transformed.png?fit=750%2C600&strip=all",
        },


        
        {
            blogCategory: "Technology",
            BlogId: 13,
            
            blogTitle: "Meta’s AI stickers are here and already causing controversy",

            blogDesc: "Well, that didn’t take long: Just a week after Meta announced a “universe of AI” for Facebook, Instagram and WhatsApp, the company’s new AI-generated stickers are already causing controversy.Some users have already received an update allowing them to quickly create AI-generated stickers from text prompts in Facebook Messenger and Instagram Messenger. However, it seems that Meta’s filters to block objectionable or questionable content are not catching everything, allowing for all sorts of interesting mashups, such as copyrighted children’s characters like Mickey Mouse being shown smoking a marijuana cigar (blunt), or Winnie the Pooh (whose copyright term just ended) holding a rifle.Artist Pier-Olivier Desbiens posted on X this evening, immediately garnering hundreds of thousands of views and comments with additional sticker images.When questioned about the kind of stickers being created and shared on X, Meta spokesperson Andy Stone pointed VentureBeat to a blog post, “Building Generative AI Features Responsibly.”",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/crop-2.jpg?fit=750%2C422&strip=all",
        },


        
        {
            blogCategory: "Technology",
            BlogId: 14,
            
            blogTitle: "Zoom Docs arrives to take on Google Docs, Notion, offers a new hub for teamwork",

            blogDesc: "The “end meeting” button may only be the start for Zoom users next year. At its annual Zoomtopia conference this week, Zoom showcased several significant updates and new products that aim to further streamline hybrid work and collaboration. Headlining the announcements was Zoom Docs, a fully-integrated AI-powered, multi-user cloud documentation solution built directly into the Zoom platform.In a release, Zoom CEO Eric Yuan emphasized Zoom’s continued promise to evolve its platform through powerful AI capabilities. “Our new innovations demonstrate Zoom’s commitment to evolving our platform in ways that empower limitless human connection and solve real business problems,” said Yuan. At its core, Zoom Docs provides document creation, editing, and collaboration features like other cloud document solutions. However, its tight integration across Zoom differentiates the product.Documents, wikis, tables and other content can all be created, edited and searched for within Zoom Meetings, Team Chat or the Zoom web and desktop apps, offering a direct competitor to up-and-comer Notion. ",

            blogImg: "https://venturebeat.com/wp-content/uploads/2023/10/nuneybits_color_photo_of_the_process_of_finding_the_right_job_c_8a91ad28-8fe4-4eae-b17f-642ccfc975d8.png?fit=750%2C420&strip=all",
        },


        
        {
            blogCategory: "Technology",
            BlogId: 15,
            
            blogTitle: "How AI-powered patch management protects remote and hybrid workers",

            blogDesc: "Most organizations have no idea how many exposed, out-of-date endpoints they have or whether their remote and hybrid workers are safe. IT and security teams are often overwhelmed with work and conflicting urgent priorities. Unfortunately, it often takes an intrusion or breach for patching to become a priority. Cybercrime gangs and state-sponsored Advanced Persistent Threat (APT) threat actors who have launched the largest breaches in history — including the A.P. Møller-Maersk ransomware attack — often understand a target’s network better than admins. Whoever owns identities owns the business, and as devastating ransomware attacks show, threat actors are brazen about shutting an entire business down to meet demands.Complacency kills, especially when it comes to understanding where endpoints that remote and hybrid workers rely on are, and whether they’re current or not. More than half (60%) of enterprises know less than 75% of the endpoint devices on their network. Only 58% can identify every attacked or vulnerable asset on their network within 24 hours of an exploit.",

            blogImg: "https://venturebeat.com/wp-content/uploads/2022/02/GettyImages-1367729442-e1645556694932.jpg?fit=750%2C490&strip=all",
        },



    ]);

    const [sportBlog] = useState([
        
        {
            blogCategory: 'Sport',
            BlogId: 1,
            blogTitle: "Cricket in 2028 LA Olympics: How the sport and Games can benefit from its inclusion",

            blogDesc: "Cricket is set for a return to the Olympics after a gap of 128 years with the organisers of the 2028 Los Angeles Games making a formal recommendation its inclusion in the T20 format.The last time cricket was part of the Olympic Games was in 1900 when England defeated France in a one-off match in Paris to win the gold medal.On Monday, LA 2028 organisers recommended including cricket alongside baseball/softball, flag football, lacrosse and squash in the Games in five years time. The final decision will be ratified at the IOC Session which will take place in India.“We are delighted that LA28 have recommended cricket for inclusion in the Olympics. Whilst this is not the final decision, it is a very significant landmark towards seeing cricket at the Olympics for the first time in more than a century,” ICC Chairman Greg Barclay said in reaction. The cricketing calendar is packed with ICC tournaments and bilateral series and Olympic participation means future calendars would have to be redrawn. However, it’s a move that is set to benefit cricket in more than one way besides enhancing its reputation as a global sport.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/Cricket-in-Olympic.jpg?impolicy=website&width=640&height=363'

        },

        {
            blogCategory: 'Sport',
            BlogId: 2,
            blogTitle: "Cricket should not overshadow achievements in other sports",

            blogDesc: "India’s performance at the Asian Games shows how far we have come and how Indians are becoming champions in sports other than cricket. It is time now for us, Indian sports fans, to do our bit.Given that we are at the start of another World Cup, we expect the excitement to peak in the coming weeks. Social media, office water coolers, public transport, parks, and any other gathering will have cricket discussions. Will India reach the semi-finals? What about the finals? Can we win?It’s all great. But while cricket shines brightest, there seems to be another amazing trend emerging as well. That is, the rise of Indian excitement in other sports, particularly those which Indians historically have cared little about. This has happened mainly because of recent Indian achievements in these sports. Suddenly, a medal win for India in the Olympics or Asian Games brings a surge of interest and attention. After all, were we ever interested in javelin throw before Neeraj Chopra won that Olympic Gold?",

            blogImg: 'https://static.toiimg.com/thumb/width-800,height-450,imgsize-69722,msid-104244984/104244984.jpg'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 3,
            blogTitle: "NFL Power Rankings: Panthers might have really screwed up trading up for Bryce Young",

            blogDesc: "The Carolina Panthers were impatient at quarterback, and in the moment their trade to get a franchise quarterback seemed reasonable. Expensive, but reasonable. The Panthers fell to 0-5 on Sunday. The bad news about that, other than not having a win, is that they also don't have their 2024 first-round draft pick. That went to the Chicago Bears in the trade to get the first pick and Young. A lot of other assets went to the Bears in that trade, too. It's a reminder that the massive trade up to get a quarterback often isn't worth the price. Young hasn't looked great and that's not a big problem yet. He could live up to all of the kind words said about him before the draft. What the Panthers gave up is the problem. If you want a lesson in why impatience can be ruinous, just look at what the Panthers traded to get their quarterback right away rather than waiting a year. When the side-by-side comparison is done, it's going to look ugly for Carolina.",

            blogImg: 'https://s.yimg.com/ny/api/res/1.2/vvaZAxG8XUpvyFsmaVWOfQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2023-10/94adbc10-66bd-11ee-bdfb-f57ccf1fac63'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 4,
            blogTitle: "Shubman Gill spends night in hospital, set to miss India vs Pakistan World Cup encounter: Report",

            blogDesc: "Shubman Gill is set to miss the marquee India vs Pakistan World Cup clash as the 24-year-old’s platelet count dropped below 1,00,000 per microliter, said a report. The right-handed batter had been down with dengue fever and missed India’s opening fixture against Australia in Chennai.“Gill’s platelet count dropped below 1,00,000 and he was hospitalised a day before – October 8 – for observation purpose. Nothing alarming there as he is already back in the hotel on October 9 and continues to receive treatment there. Ever since he has landed in Chennai, all his treatment – from regular dose of glucose and other procedures – has been happening in hotel only,” CricketNext reported.“Gill is not 100%, but he’s sick. So, there’s no injury concern. Gill is not feeling well. We are monitoring him on a daily basis. So, we’re going to give him every chance to recover and see how he feels. So, he’s not ruled out yet,” Rohit had said at pre-match presser.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/09/India-Pakistan-Group-A-Asia-Cup-AP-640.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 5,
            blogTitle: "World Cup 2023: 'There's age factor' — Sehwag wants India to rest senior player for match vs Afghanistan",

            blogDesc: "Former India opener Virender Sehwag believes that Team India should rest Ravichandran Ashwin for their upcoming 2023 World Cup clash against Afghanistan. After their win against Australia, India will now take on Afghanistan at the Arun Jaitley Stadium in Delhi on Wednesday, 11 October. The former India batter said that the Indian management should use Ashwin prudently and he should be rested in order to ensure his freshness for the rest of the tournament. Sehwag also suggested that Mohammed Shami could be considered as a replacement for the senior spinner in the playing XI for the upcoming match.“I think Ravichandran Ashwin will be rested. Mohammed Shami has been in wonderful form, and he even took a fifer against Australia. This is a different wicket, and the ground is also smaller. Also, there is the age factor with Ashwin. So, India will look to save him for the big matches,” Sehwag said.Ashwin was drafted into India’s squad for the World Cup after Axar Patel failed to recover from his injury. In India’s opening match of the World Cup against Australia in Chennai on Sunday, Ashwin was quite good as he conceded 34 runs from his full quota of 10 overs and picked up the wicket of Cameron Green.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/R-Ashwin-1.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 6,
            blogTitle: "Asian Games 2023: India men's hockey team beat Japan 5-1 in final to clinch gold, qualify for 2024 Paris Olympics",

            blogDesc: "The Indian men’s hockey team on Friday scripted up a stunning 5-1 win over the defending champions Japan at the Asian Games 2023 in Hangzhou to claim the gold medal and confirm a spot for the 2024 Paris Olympics.This is India’s fourth gold medal in men’s field hockey at the Asian Games. India had previously won the gold medal in 1966, 1998, and in 2014.Forward Sukhjeet Singh earned his 50th international cap in the match against Japan. Harmanpreet Singh (32′, 59′), Manpreet Singh (25′), Amit Rohidas (36′), and Abhishek (48′) scored the goals for India in the Final. Seren Tanaka (51′) scored the sole goal for Japan.The match began with India in attack as Hardik Singh and Jarmanpreet Singh combined on the left flank to try and stitch a dangerous move, but the duo were stopped in their tracks by the men in red. With both India and Japan trying to play on the counter-attacks, the contest turned into a game of tight passes in the midfield area.A late penalty corner saw Harmanpreet Singh hammering a thunderous flick on target but Japan goalkeeper Takumi Kitagawa made the save and the score remained 0-0 at the end of the first quarter.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/India-hockey-640_AP.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 7,
            blogTitle: "Deep Grace Ekka Exclusive: 'Indian women's hockey team is going to Asian Games with only one aim, to win gold'",

            blogDesc: "Ahead of the Asian Games 2023, Firstpost caught up with India's vice-captain Deep Grace Ekka, who spoke about women's hockey team's preparation for the tournament, gold medal chances and the competition from other teams.Going into the Asian Games 2023, the goal and the expectation for the Indian women’s hockey team is crystal clear — a gold medal. Being the highest-ranked team in the women’s event, anything less than gold would be seen as a failure. Also, a gold at Hangzhou 2022 doesn’t only guarantee glory but also a direct ticket to the Olympic Games Paris 2024.Ranking and stature, however, have never been a guarantee for the gold medal at the Asian Games. Despite being the favourites, India could only win a silver at the last edition in 2018 (Indonesia) as Japan took the gold. In 2014 in South Korea, India could only bag the bronze.India’s vice-captain and penalty corner specialist, Deep Grace Ekka, was part of the team in both the 2014 and 2018 Asiads. The 29-year-old from Odisha’s Sundargarh, the hotbed of hockey talent, is once again going to be one of the most crucial players for India at the Games.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/09/Deep-Grace-Ekka1.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 8,
            blogTitle: "India lose 4-5 to Pakistan in men's Asian Hockey 5s World Cup Qualifier",

            blogDesc: "Maninder Singh (17th, 29th minutes), Gurjot Singh (12th), and Mohammad Raheel (21st) scored for India.India scripted a stunning 12-2 win over Oman before going down 4-5 against arch-rivals Pakistan at the men’s Asian Hockey 5s World Cup Qualifier on Wednesday.For Pakistan, Ahtisham Aslam (2nd, 3rd), Zikriya Hayat (5th), Abdul Rehman (13th) and Abdul Rana (26th) were on target to help set up the win.The match started with Pakistan maintaining possession in the early minutes and Aslam caught India’s defence off-guard with a reverse hit to get an early goal.As India tried to get back into the match with a quick move, Pakistan goalkeeper Ali Raza made a good save and initiated a counter-attack, leading to Aslam doubling their lead.Maninder tried to hold the ball in the middle, but Hayat intercepted and took a shot from a distance to score another goal for Pakistan.On Tuesday night, Maninder and Raheel scored four and three goals respectively as the India hammered Bangladesh 15-1 in their tournament opener.India will next face Malaysia and Japan on Thursday.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/08/India-Pakistan-hockey-5s-640.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 9,
            blogTitle: "World Cup: Kohli, Rahul and Jadeja star in India's six-wicket victory over Australia",

            blogDesc: "After Ravindra Jadeja's 3/28 helped India bowl Australia out for 199, Virat Kohli and KL Rahul shared a 165-run partnership for the fourth wicket to rescue the Men in Blue from a disastrous start and guide them to a six-wicket victory with nearly nine overs to spare.Virat Kohli and KL Rahul stitched a match-winning 165-run partnership for the fourth wicket to rescue India from a disastrous start in their chase of 200 against Australia.Ravindra Jadeja turned the game on its head with a three-wicket burst in the middle overs.Josh Hazlewood removed Rohit Sharma and Shreyas Iyer in one over as Australia reduced India to 2/3 early in the chase.Virat Kohli and KL Rahul came to India’s rescue after the disastrous start with a steady approach.Virat Kohli was dropped on 12, and would make the most of the reprieve by adding another 73 runs.Virat Kohli and KL Rahul not only weathered the storm after Australia had reduced India to 2/3, but ended up turning the game on its head with a brilliant 165-run partnership for the fourth wicket that setup a comfortable six-wicket victory. ",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/Kohli-Rahul-640_AP.jpg?impolicy=website&width=640&height=395'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 10,
            blogTitle: "'Played and had fun': Eden Hazard, Chelsea and Belgium legend, announces retirement",

            blogDesc: "Eden Hazard thanked his clubs and the Belgian federation as well as friends, family and advisors 'who have been close to me in good times and bad'.Belgian attacking midfielder Eden Hazard announced his retirement on Tuesday after failing to find another club following his release by Real Madrid.The 32-year-old endured an injury-plagued spell at Real Madrid after his 89-million-pound (103 million euros, $110 million) move from Chelsea in 2019, playing just 76 matches in all competitions across four seasons.“You must listen to yourself and say stop at the right time,” Hazard wrote on Instagram. “After 16 years and more than 700 matches played, I have decided to end my career as a professional footballer.”Hazard had a far happier time at Chelsea, winning both the Premier League title and Europa League twice as well as the FA and League Cup from 2012-2019.He was also integral to Belgium’s impressive run to the 2018 World Cup semi-finals, beating Brazil in the quarter-finals but bowing out to eventual champions France in the semi-final.However, he was unable to rouse himself for last year’s World Cup finals when along with fellow stars Kevin de Bruyne and Romelu Lukaku, Hazard and a below-par Belgium bowed out in the group stage.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/Eden-Hazard.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 11,
            blogTitle: "UEFA picks UK-Ireland to host 2028 European Championship, Italy-Turkey to stage Euro 2032",

            blogDesc: "Co-hosting by five UEFA members in 2028 and two in 2032 follows the radical 13-nation project that was agreed for Euro 2020.The future of football’s European Championship for the next decade was decided Tuesday — the United Kingdom and Ireland will host in 2028 and an unusual Italy-Turkey co-hosting plan was picked for 2032.There were no losers when the executive committee of European football governing body UEFA finally approved the double hosting award that was inevitable after former bid rivals Italy and Turkey united under one flag of convenience in July.That deal took Turkey out of the Euro 2028 contest where the team of five neighboring UEFA member federations — England, Northern Ireland, Scotland, Wales and Ireland — was long favored to win.Turkey also was likely to lose in any contested vote for 2032 even amid doubts Italy could finish a massive construction project to build and upgrade the stadiums needed for a 24-team, 51-game tournament.UEFA gains stability over the organization if Italy and Turkey each has to provide just five stadiums despite its own bid rules stating that only neighboring member federations can propose co-hosting.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/Euro-2028.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 12,
            blogTitle: "Merdeka Cup 2023: Revised schedule announced; India matches, squad, LIVE Streaming",

            blogDesc: "The Merdeka Tournament 2023 will now be played among three teams - India, Tajikistan and hosts Malaysia after withdrawal of Palestine.The fixtures of the Merdeka Tournament 2023 have been changed due to the last-minute withdrawal of Palestine. The tournament will now take place with three teams – India, Tajikistan and hosts Malaysia in a knock-out format.Sticking to the original schedule, India will play hosts Malaysia at the 90,000-seater Bukit Jalil Stadium in Kuala Lumpur on October 13, with the winners set to play Tajikistan in the final on October 17.“The format change is the best solution that has been reached at a special meeting between FAM as the organizer of the 2023 Independence Cup (Merdeka) with the management of the Indian and Tajikistan teams, this morning after taking into account the time constraints following the withdrawal of the Palestinian team,” Football Association of Malaysia said in a statement on Tuesday. The palpable excitement was there to see on all the faces as the players set their sights on what promises to be a thrilling encounter in front of a partisan crowd at the Bukit Jalil. Goalkeeper Gurpreet Singh Sandhu is one who has experienced that atmosphere in Malaysia, having played in the AFC Cup against Selangor FA in 2013 for East Bengal, and is raring to go.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/09/India-football-team-live-640.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 13,
            blogTitle: "Exclusive: Rohan Bopanna opens up winning Asian Games mixed doubles gold with Rutuja Bhosale on First Sports",

            blogDesc: "Eden Hazard thanked his clubs and the Belgian federation as well as friends, family and advisors 'who have been close to me in good times and bad'.Belgian attacking midfielder Eden Hazard announced his retirement on Tuesday after failing to find another club following his release by Real Madrid.The 32-year-old endured an injury-plagued spell at Real Madrid after his 89-million-pound (103 million euros, $110 million) move from Chelsea in 2019, playing just 76 matches in all competitions across four seasons.“You must listen to yourself and say stop at the right time,” Hazard wrote on Instagram. “After 16 years and more than 700 matches played, I have decided to end my career as a professional footballer.”Hazard had a far happier time at Chelsea, winning both the Premier League title and Europa League twice as well as the FA and League Cup from 2012-2019.He was also integral to Belgium’s impressive run to the 2018 World Cup semi-finals, beating Brazil in the quarter-finals but bowing out to eventual champions France in the semi-final.However, he was unable to rouse himself for last year’s World Cup finals when along with fellow stars Kevin de Bruyne and Romelu Lukaku, Hazard and a below-par Belgium bowed out in the group stage.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/Rohan-Bopanna-mixed-doubles-gold-Asian-Games-PTI-640.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 14,
            blogTitle: "China Open 2023: Iga Swiatek hails 'really big' victory in Beijing",

            blogDesc: "Iga Swiatek triumphed 6-2, 6-2 in Beijing to take the first China Open women's title since the pandemic.Iga Swiatek hailed a “really big” victory after she delivered a dominant performance to win the China Open on Sunday, beating surprise package Liudmila Samsonova in straight sets to crown a resurgent run of form.The world number two triumphed 6-2, 6-2 in Beijing to take the first China Open women’s title since the pandemic, after Beijing lifted its isolationist zero-Covid policy.The 22-year-old broke Samsonova’s serve in the sixth game and sealed the opening set when the unseeded Russian slammed a forehand into the net.Swiatek looked assured throughout and quickly notched another break in set two when her error-prone opponent fired another forehand wide. And when Samsonova sent an ill-advised drop-shot into the net to hand her the victory, the Pole doubled over with emotion before a delighted crowd.“For sure, this is really big for me. Winning this title is something I never would have thought at the beginning of the tournament,” Swiatek said at a post-match news conference.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/Iga-Swiatek-China-Open-AP-640.jpg?impolicy=website&width=640&height=363'

        },
        
        {
            blogCategory: 'Sport',
            BlogId: 15,
            blogTitle: "Chirag Shetty-Satwiksairaj Rankireddy rise to World No 1 in BWF Rankings",

            blogDesc: "Chirag Shetty and Satwiksairaj Rankireddy who won a gold medal at the Asian Games in Hangzhou, climbed to top of the men's doubles ranks.India’s men’s doubles badminton pairing of Chirag Shetty and Satwiksairaj Rankireddy climbed to the top of the BWF rankings on Tuesday. This is the first time they’ve been ranked as No 1 team in the world.The milestone moment comes on the heels of their gold medal finish at the Asian Games in Hangzhou, China.In the final they had beaten South Korea’s Choi Solgyu and Kim Wonho in straight games to win India’s first ever badminton gold at an Asian Games.The Indian combination have 92,411 ranking points as against 90,129 points for the Indonesians and 89,991 for the Chinese.At the Asian Games, Shetty and Rankireddy also won India’s first men’s doubles medal after a 41 year gap. Leroy D’sa and Pradeep Gandhe were the last pairing to medal at an Asian Games for India – taking the bronze in 1982.Meanwhile in other ranking updates, HS Prannoy dropped one place in the men’s singles to World No 8 despite a sensational bronze medal finish at the Asian Games. PV Sindhu, who crashed out in the quarter-finals, has risen by two places to World No 13 as the highest-ranked women’s singles player from India.",

            blogImg: 'https://images.firstpost.com/wp-content/uploads/2023/10/Satwik-Chirag-640_AP.jpg?impolicy=website&width=640&height=363'

        },

    ]);

    return (
        <BlogData.Provider value={{ bollyWoodBlog, hollyWoodBlog, fitenessBlog, technologyBlog, sportBlog }}>
            {props.children}
        </BlogData.Provider>
    )
}

export default BlogDataBase
