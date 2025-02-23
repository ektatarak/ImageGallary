const folders = document.querySelectorAll('.folder');
// Define image URLs with their categories
const imageUrls = {
    'nature-wildlife': [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVylWfDhWRC36sp5Y2o9R66oXU9oVnObWXA&s', category: 'nature-wildlife' },
        { src: 'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEXBmhh_DD-TGPTMTIx0AqQUizV5c18nIjg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiGpfacE6xFW8WGc4XANqDRNwiGUFaXfVDQ&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFUl6M3r-e3jwkpffR4vZJofibIbRn6MgpA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNm7IQAH1ehCAGOAhUTfwOEg-DL_kkLdfu1A&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8E1Ne6-ydNtg3tkeaBwxKuNxIjJj5nqXtg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCNkLYT7Sz7B3PF9yasQOPLZU9RZbGqDtqg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRem_c2UVBTZckm9rh1AFynK8zXsEGpEsCaZg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7tEAdQUcQhn2TGS7BR0Al8JsG1aBl3VBpw&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTWU-Naw8q9xtUwdZR8ln-xcK-XnrNPvqAg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOM8JR-vN9LfSMidJVQEh1ouP-daBxOlEcsg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4-1LeH9SszIv41X4KAd_qriQGT27j7vqdA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9eJsqLc9v4gP5EGg_HYE0Rul5XUaR3ZPCA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY_fTZ-sACqsDc8bGJGwapweWBcY2gyHjLg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnnukeVxsCjii634VKfsuzNfRwfK-NBk-Rw&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3aE-fLJxGe_tNy5a7CrfsNJy3Td1ABazjw&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQv-E4708w-t24VUm8XF6LvS6MN1mkWIOs0g&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlidC5358Wgm9XQ2FRxuaQXUc7N1zfGNXUJA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vU373wzwlRz9rWuSpTqc1YhTSz8hu5pelg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sGoZ8NUH9u9Iv4a4w0nKHvP-ZMuDN4Vapw&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUQvfljD-SLZ2lQRr-8tQDI11_gERdchNsQ&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSfRtC5Mco-9GT3QXGM7ZlfyItY6EidGnQA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7w2IGlfZtKfDg-Vf08-VkINNQCLXhYRZftg&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUMRinjST5cJ1Po5toOyZlL3i2ubu9SdnLA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4AU10Bj4gSfKrNjQKqd-dSQuZMvBHmvpCQ&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtk14rQtDkXUFTg-vsGslJ7c6mqeRz2DrpkA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5ZIssGvbWIMgY6jUkCgQCc1otfFc4bSDjQ&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuf5Zk4aW70y2oG5sXE_A1l4zSuUCoPwOlw&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsO_HPuMIyqsSXR5rOhoCTlhnTbYREXEXqA&s', category: 'nature-wildlife' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQNbv4Au647g1FMhKYM_aecTVjmuPwZd5tw&s', category: 'nature-wildlife' },
        { src: 'https://static.vecteezy.com/system/resources/thumbnails/030/353/613/small/natural-background-ai-generated-photo.jpg', category: 'nature-wildlife' },
        { src: 'https://media.istockphoto.com/id/1488944909/photo/environment-concept-green-glass-globe-with-a-tree-in-the-forest-with-sunlight-sustainability.webp?b=1&s=170667a&w=0&k=20&c=f89zMjUr7FldJzgS0p8mJyuTxBWgvhv0kBQL7fcSnjs=', category: 'nature-wildlife' },
        { src: 'https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg', category: 'nature-wildlife' },
        { src: 'https://images.ctfassets.net/hrltx12pl8hq/2Qhk9ByDU8lttD41GmYIeF/c6d6ed90518c9142b12cdc478e82ce01/6_trees.webp', category: 'nature-wildlife' },

        // Add more images here
    ],
    'cultural-heritage': [
        { src: 'https://www.visittnt.com/images/info/poeople-in-india.jpg' },
        { src: 'https://exploremyindia.in/wp-content/uploads/2017/08/1-8.jpg' },

        { src: 'https://qph.cf2.quoracdn.net/main-qimg-3f2662e41a162c05657be8d5d635f33a-lq', category: 'cultural-heritage' },
        { src: 'https://img.freepik.com/free-photo/portrait-adorable-indian-girl_23-2150913166.jpg?t=st=1723281198~exp=1723284798~hmac=a4890d62b505adc1c2c916fb3c938e12292a75c12b8e1be0d37bfffd64698168&w=996', category: 'cultural-heritage' },
        { src: 'https://img.freepik.com/free-photo/illuminated-pagoda-glows-ancient-east-asian-culture-generated-by-ai_188544-38645.jpg?t=st=1723281223~exp=1723284823~hmac=d5b910a1f647d6ee7feebff1f63fe70e19c863f53ab863a0ca389f688e28f4d6&w=1380', category: 'cultural-heritage' },


        { src: 'https://qph.cf2.quoracdn.net/main-qimg-c9fcca50c16185bbb0678bd25869469c-lq', category: 'cultural-heritage' },
        { src: 'https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Indian+Festival/Ganesh-Chaturthi.jpg', category: 'cultural-heritage' },
        { src: 'https://ihplb.b-cdn.net/wp-content/uploads/2011/02/dance.jpg', category: 'cultural-heritage' },
        { src: 'https://utsav.gov.in/public/festival_top/1659608853.jpg', category: 'cultural-heritage' },
        { src: 'https://img.freepik.com/premium-photo/vibrant-detailed-glossy-rangoli-designs-sharad-purnima-isolated-setting-stock-photo-conce_980716-481207.jpg?w=1380', category: 'cultural-heritage' },

        { src: 'https://res.cloudinary.com/local-tourism/images/w_1200,h_900,c_scale/f_webp,q_auto/v1683888272/Post/Uncovering%20the%20Hidden%20Gems%20of%20Varanasi%20Tourist%20Places/Varanasi_ci3rbx/Varanasi_ci3rbx.webp?_i=AA', category: 'cultural-heritage' },
        { src: 'https://www.oneindia.com/img/2023/10/durga-puja-1697527975.jpg', category: 'cultural-heritage' },
        { src: 'https://assam.gov.in/sites/default/files/inline-images/Jhumur%20Dance.jpg', category: 'cultural-heritage' },
        { src: 'https://www.intermiles.com/iwov-resources/images/blog/top-cultural-tourist-places-to-visit-in-india/cultural-Mobile-414x233.jpg', category: 'cultural-heritage' },
        { src: 'https://tourdefarm.in/wp-content/uploads/2021/01/Marwar-Festival-1.jpg', category: 'cultural-heritage' },
        { src: 'https://www.savaari.com/blog/wp-content/uploads/2023/10/Yakshagana_art_form1.webp', category: 'cultural-heritage' },
        { src: 'https://www.drishtiias.com/images/uploads/1695295883_image3.png', category: 'cultural-heritage' },
        { src: 'https://im.hunt.in/cg/Chhatis/About/Profile/Culture/fadsrs.jpg', category: 'cultural-heritage' },
        { src: 'https://blog.novatr.com/hs-fs/hubfs/Meenakshi%20Temple%2C%20Madurai.png?width=1000&height=600&name=Meenakshi%20Temple%2C%20Madurai.png', category: 'cultural-heritage' },
        { src: 'https://media.istockphoto.com/id/1341409072/photo/group-of-unrecognizable-females-showing-henna-hands.webp?b=1&s=170667a&w=0&k=20&c=kVSx0X6t6Fc85yurkh7qCTQDvqirBP4RQgkbiWcpz9E=', category: 'cultural-heritage' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bhangra-dance.jpg/250px-Bhangra-dance.jpg', category: 'cultural-heritage' },
        { src: 'https://knowindia.india.gov.in/assets/images/img-micro-1.png', category: 'cultural-heritage' },
        { src: 'https://www.shutterstock.com/image-photo/portrait-happy-traditional-indian-woman-260nw-2126650322.jpg', category: 'cultural-heritage' },
        { src: 'https://travelogyindia.b-cdn.net/storage/app/upload/northeast-history.jpg', category: 'cultural-heritage' },
        { src: 'https://cdn.tripspoint.com/uploads/photos/1986/golden-triangle-with-temples-cities-ayodhya-varanasi_v7h8k.jpeg', category: 'cultural-heritage' },
        { src: 'https://qph.cf2.quoracdn.net/main-qimg-74f9d9c5cf3c9aa105dcdb7bd1492c98', category: 'cultural-heritage' },
        { src: 'https://cdn.firstcry.com/education/2022/07/21113612/Essay-On-Indian-Culture-And-Tradition-10-Lines-Short-and-Long-Essay-For-Kids.jpg', category: 'cultural-heritage' },
        { src: 'https://366e203a.rocketcdn.me/wp-content/uploads/2021/01/Italy.jpg', category: 'cultural-heritage' },
        { src: 'https://swarajya.gumlet.io/swarajya/2021-10/054eb728-fdd6-4ccd-8589-e6d28a234be5/Navratri.jpg?q=75&auto=format,compress&format=webp', category: 'cultural-heritage' },
        { src: 'https://img.freepik.com/free-photo/portrait-indian-people-celebrating-baisakhi-festival_23-2151216945.jpg?t=st=1723281670~exp=1723285270~hmac=eb207841363e5a680c48043ef8fb7b847661423cc1d3ffccc4cfa123305404fd&w=1380', category: 'cultural-heritage' },
        { src: 'https://img.freepik.com/premium-photo/group-people-are-sitting-front-food-display_1300443-855.jpg?ga=GA1.1.1191558484.1721987016&semt=ais_hybrid', category: 'cultural-heritage' },
        { src: 'https://www.aljazeera.com/wp-content/uploads/2024/03/AP24085238345102-1711364639.jpg?resize=1170%2C780&quality=80', category: 'cultural-heritage' },
        { src: 'https://www.tourmyindia.com/blog//wp-content/uploads/2014/12/khajuraho-dance-festival-1.jpg', category: 'cultural-heritage' },
        { src: 'https://images.saatchiart.com/saatchi/957257/art/3566472/2636358-HSC00002-7.jpg', category: 'cultural-heritage' },
        { src: 'https://qph.cf2.quoracdn.net/main-qimg-1afa96e973fd125a5050ef15149dd25d-lq', category: 'cultural-heritage' },


        // Add more images up to 35...

    ],
    'travel-adventure': [
        { src: 'https://img.freepik.com/premium-photo/woman-asians-travel-relax-holiday-view-mountain-nature-cliffs_36074-714.jpg?w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/traveller-sitting-rock-holding-camera-take-photo-doi-pha-mon-mountains-chiang-rai-thailand_335224-1078.jpg?', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/premium-photo/hiking-couple-with-backpacks-walking-wooden-bridge-mountain-river_1089297-4820.jpg?w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/cute-lovely-couple-beach_1328-1310.jpg?t=st=1723280739~exp=1723284339~hmac=11fbb4c32ad15ad9ef2186faa95357bac0cf2d347999338de0b5c04d9cc2ec60&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/young-beautiful-couple-posing-waterfall-travelers-hikers-backpacks_1296-721.jpg?t=st=1723280788~exp=1723284388~hmac=cd466ffe41ab90ba72a4ebf9bcdaf169acc1bd24142716b6bf568e2ad04029f7&w=740', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-846.jpg?t=st=1723280852~exp=1723284452~hmac=32e00e515eb415095835f79e7f5781e7093407833d77af78c7a848dc8db4fcc9&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/premium-photo/young-man-trekking-top-green-mountain-enjoying-amazing-landscape-views-sunset_68060-287.jpg?w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/premium-photo/woman-with-backpack-is-looking-out-water_151355-65298.jpg?w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/silhoutte-birds-flying-young-woman-taking-photo-sunset_335224-914.jpg?t=st=1723280981~exp=1723284581~hmac=064238bd5bc8cc84f281fc13cc2187acdcd68b75d47f71f79e3a50129db33916&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/woman-standing-rock-atuh-beach-nusa-penida-island-bali-indonesia_335224-344.jpg?t=st=1723281052~exp=1723284652~hmac=6665c4dc181b4d041d19862101c8983132e8c3be7d1abb60a720a09530026535&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/western-woman-sitting-cultural-architecture-udaipur-india_53876-65364.jpg?t=st=1723281131~exp=1723284731~hmac=021654cad8ee3f7db3bb690c716a3c330204bf65e01bcf0a29fa2b777f6027dc&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/premium-photo/indian-people-walking-bare-foot-mahabodhi-temple-pray-pilgrim_43263-1882.jpg?w=740', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/tourist-carrying-luggage_23-2151747354.jpg?t=st=1723281298~exp=1723284898~hmac=c0655a83c63780d0f24864db3805c47461ee7480b1b8152089b80c3d06e029ea&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/premium-photo/father-carrying-his-son-his-shoulders_247622-1243.jpg?w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498275.jpg?t=st=1723281493~exp=1723285093~hmac=082f2823ee6d3817d56b3603808456507756ebaf22cb0062621bd1fcbc11f0dd&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/free-photo/couple-standing-front-forest_23-2147637648.jpg?t=st=1723281514~exp=1723285114~hmac=6da9bf6db7358373c306ec0df9fa4eef6c2d773aebf54156b5f6d81cd9febc4b&w=1380', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/premium-photo/side-view-portrait-girl-standing-footpath-amidst-green-field_1048944-27912475.jpg?w=740', category: 'travel-adventure' },
        { src: 'https://img.freepik.com/premium-photo/people-field-by-trees-against-sky_1048944-3579705.jpg?w=1060', category: 'travel-adventure' },
        { src: 'https://static2.tripoto.com/media/filter/tst/img/OgData/1458116904_1457977545_1.jpg', category: 'travel-adventure' },
        { src: 'https://images.prismic.io/yugen-earthside/9ca15df9-4971-480c-a782-823b0974d248_roberto-nickson-smJ6XsYy8gA-unsplash.jpg?auto=format%2Ccompress&rect=0%2C94%2C5472%2C3461&w=770&h=487', category: 'travel-adventure' },
        { src: 'https://images2.goabroad.com/image/upload/c_fill,g_faces:auto,fl_progressive,f_auto,h_400,w_1200/v1/images2/program_content/prime-how-to-choose-the-best-adventure-travel-tour-companies-1504752924.jpg', category: 'travel-adventure' },
        { src: 'https://www.travellingbookjunkie.com/wp-content/uploads/2022/04/Adventure-holiday-1050x591.jpg', category: 'travel-adventure' },
        { src: 'https://www.shutterstock.com/image-photo/big-group-happy-tourists-having-600nw-2416663047.jpg', category: 'travel-adventure' },
        { src: 'https://media.licdn.com/dms/image/D5612AQFRnOHY5y6PsQ/article-cover_image-shrink_600_2000/0/1668946092179?e=2147483647&v=beta&t=F4cBz1AeiVJ74Vav8gyiYx0xYFgwCZAGXjGb-vAEC5Q', category: 'travel-adventure' },
        { src: 'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/ejgcq0acumqaosd7kl26', category: 'travel-adventure' },
        { src: 'https://worldexpeditions.com/croppedimages/Blogs/WEX/Bhutan_Snowman_Trek_02-10-2018-medium-59832.jpg-639814-1100px.jpg?1584486021', category: 'travel-adventure' },
        { src: 'https://www.asiarealestatesummit.com/wp-content/uploads/2023/10/shutterstock_2049380855.jpg', category: 'travel-adventure' },
        { src: 'https://t3.ftcdn.net/jpg/07/28/71/02/360_F_728710257_RdKsiR2gmz28lJeWdlKTpOgJGTh3iRnX.jpg', category: 'travel-adventure' },
        { src: 'https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2021/10/Adventure-Ideas.jpg', category: 'travel-adventure' },
        { src: 'https://cdn.magzter.com/Asian%20Photography/1691149743/articles/PWTPq-KhB1691668053074/TIPS-TO-PHOTOGRAPH-ADVENTURE-PHOTOGRAPHY-IN-EXTREME-CONDITIONS-IN-INDIA.jpg', category: 'travel-adventure' },
        { src: 'https://i.pinimg.com/736x/f8/fb/2e/f8fb2e28ce9983125e822a498c8b8868.jpg', category: 'travel-adventure' },
        { src: 'https://images.squarespace-cdn.com/content/v1/568429b7c647addb5746fafe/1704320018499-NA2Z3UTDQUDLJ9FU1371/image-asset.octet-stream?format=500w', category: 'travel-adventure' },
        { src: 'https://images.squarespace-cdn.com/content/v1/568429b7c647addb5746fafe/1704320070650-B9Z1YMJANZUKKRU0ZT8K/image-asset.octet-stream?format=500w', category: 'travel-adventure' },
        { src: 'https://cityfurnish.com/blog/wp-content/uploads/2023/04/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand-min.jpg', category: 'travel-adventure' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWT-7DycWq2GLmonKXV2v4VAvdpomwMKiXZA&s', category: 'travel-adventure' },



        // Add more images here
    ],
    'underwater-world': [
        { src: 'https://www.baltana.com/files/wallpapers-17/Underwater-World-Fantasy-Wallpaper-44404.jpg', category: 'underwater-world' },
        { src: 'https://pics.craiyon.com/2023-06-15/7e2a80d35d0d44b1a8e16c10f3022cb5.webp', category: 'underwater-world' },
        { src: 'https://previews.123rf.com/images/vesta1967/vesta19671508/vesta1967150800008/44261662-the-underwater-world-with-fish-and-plants.jpg', category: 'underwater-world' },
        { src: 'https://media.istockphoto.com/id/518372184/photo/tropical-fishes.jpg?s=612x612&w=0&k=20&c=uDxKOLl2P5QA9-eEFJ6XoIw3YJAtZO3h8a-7GKRObNc=', category: 'underwater-world' },
        { src: 'https://pics.craiyon.com/2023-10-03/54f40f89957b4d92ac0aa5c277c3d173.webp', category: 'underwater-world' },
        { src: 'https://www.boatus.com/-/media/expert-advice-archive/2018/august/coral-reef.ashx?h=386&w=650&la=en&hash=1578A7083851840BCBC17929A24B600F', category: 'underwater-world' },
        { src: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/lion-city.jpg', category: 'underwater-world' },
        { src: 'https://static.vecteezy.com/system/resources/previews/010/705/071/large_2x/colorful-coral-reef-under-the-sea-ocean-underwater-world-background-3d-rendering-photo.jpg', category: 'underwater-world' },
        { src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b410494-3059-4373-8503-559713817c4c/dfczup8-95f7ce52-9be2-4ab9-a1dd-98991287dcf9.jpg/v1/fill/w_900,h_676,q_75,strp/beautiful_underwater_world__11__by_abiliofernandez_dfczup8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiNDEwNDk0LTMwNTktNDM3My04NTAzLTU1OTcxMzgxN2M0Y1wvZGZjenVwOC05NWY3Y2U1Mi05YmUyLTRhYjktYTFkZC05ODk5MTI4N2RjZjkuanBnIiwiaGVpZ2h0IjoiPD02NzYiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzBiNDEwNDk0LTMwNTktNDM3My04NTAzLTU1OTcxMzgxN2M0Y1wvYWJpbGlvZmVybmFuZGV6LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.w2fu_RaZdHk4OljWVUJocCLPnLLVnB15me3psJX4urg', category: 'underwater-world' },
        { src: 'https://i.pinimg.com/736x/c5/31/c7/c531c703ded488126059d341dc5e42e2.jpg', category: 'underwater-world' },
        { src: 'https://img.freepik.com/premium-vector/cartoon-tropical-fish-with-beautiful-underwater-world_43633-3351.jpg', category: 'underwater-world' },
        { src: 'https://static.vecteezy.com/system/resources/previews/029/337/366/large_2x/captivating-underwater-world-wide-angle-shot-of-the-magical-beauty-beneath-the-sea-photo.jpg', category: 'underwater-world' },
        { src: 'https://www.visitsealife.com/media/gyxpl250/homepage-banner.jpg', category: 'underwater-world' },
        { src: 'https://images.squarespace-cdn.com/content/v1/5e58d8d49eb92f2a2fb5b076/1588153670858-J6V4JWR59XC1QF10GUNU/TheBeachHouses-Maroochydore-SeaLife-UnderwaterWorld_03.jpg', category: 'underwater-world' },
        { src: 'https://visitturkey.in/wp-content/uploads/2015/05/dive-into-the-beauty-of-turkeys-underwater-world-1200x675.webp', category: 'underwater-world' },
        { src: 'https://www.shutterstock.com/image-photo/sunken-shipwreck-sea-underwater-world-260nw-2091576364.jpg', category: 'underwater-world' },
        { src: 'https://cbx-prod.b-cdn.net/COLOURBOX24533623.jpg?width=800&height=800&quality=70', category: 'underwater-world' },
        { src: 'https://st4.depositphotos.com/3228843/27121/i/450/depositphotos_271211272-stock-photo-beautiful-sea-flower-in-underwater.jpg', category: 'underwater-world' },
        { src: 'https://as1.ftcdn.net/v2/jpg/02/42/28/90/1000_F_242289046_dnX1KZOpkhnJhgLjIpwfoYInJ6IcEndi.jpg', category: 'underwater-world' },
        { src: 'https://wallpapers.com/images/hd/underwater-brown-corals-mqhudkjrz6b5rbpo.jpg', category: 'underwater-world' },
        { src: 'https://w0.peakpx.com/wallpaper/1014/876/HD-wallpaper-underwater-world-ocean-corals-light.jpg', category: 'underwater-world' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDRObRdzm2zLdycHLr9VMkLQ5WA2FxU0n_Q&s', category: 'underwater-world' },
        { src: 'https://storage.prompt-hunt.workers.dev/ee0b73f7-8bb8-4e5f-934a-7825855d4ec0', category: 'underwater-world' },
        { src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79265ebb-a30b-487c-8762-c584c0f4b5ac/dgo5y68-cafbba5b-4fa6-4121-a48e-c7aca384832b.jpg/v1/fit/w_375,h_482,q_70,strp/the_magical_beauty_of_a_underwater_world_by_ishi99_dgo5y68-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY0NiIsInBhdGgiOiJcL2ZcLzc5MjY1ZWJiLWEzMGItNDg3Yy04NzYyLWM1ODRjMGY0YjVhY1wvZGdvNXk2OC1jYWZiYmE1Yi00ZmE2LTQxMjEtYTQ4ZS1jN2FjYTM4NDgzMmIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.M7-AYIaXd7oAx0GnZlx54ksGumGzIElXb-o2wnhrJi8', category: 'underwater-world' },
        { src: 'https://img.freepik.com/premium-photo/painting-goldfish-sea_396607-518.jpg', category: 'underwater-world' },
        { src: 'https://cdnb.artstation.com/p/assets/images/images/063/584/671/large/alandodrawing-mermaid-2-low-res.jpg?1685888440', category: 'underwater-world' },
        { src: 'https://images.nightcafe.studio/jobs/z1VwBpmBqGau9MLz6aZZ/z1VwBpmBqGau9MLz6aZZ--1--nqdrt_2x.jpg?tr=w-1600,c-at_max', category: 'underwater-world' },
        { src: 'https://www.rwsentosa.com/-/jssmedia/project/non-gaming/rwsentosa/home/attractions/sea-aquarium-750x422.jpg?h=422&iar=0&w=750&rev=b27fce34cad64e8a933d6a1088b7f336&hash=AF6E278FA17B735047D22226DD64A73F', category: 'underwater-world' },
        { src: 'https://ik.imagekit.io/storybird/images/038b6b91-8cb7-4e14-86df-d795e254a6f3/0_637497970.png', category: 'underwater-world' },
        { src: 'https://i.pinimg.com/736x/89/93/9f/89939fee540ea9001a9bd99f6ab87ab6.jpg', category: 'underwater-world' },
        { src: 'https://www.muddycolors.com/wp-content/uploads/2020/06/SwampKid.jpg', category: 'underwater-world' },
        { src: 'https://images.playground.com/f3a20d861cf1498c9a027b224c682009.jpeg', category: 'underwater-world' },
        { src: 'https://image.cdn2.seaart.ai/2023-10-08/19278943498585093/89e2a6a780d8b78c7f256e89b8238ed9d8c2b1da_high.webp', category: 'underwater-world' },
        { src: 'https://thumbs.dreamstime.com/b/underwater-world-13606952.jpg', category: 'underwater-world' },
        { src: 'https://img.freepik.com/premium-vector/undersea-world-blue-theme-marine-life-landscape-ocean-underwater-world-with-different-inhabitants_284645-1131.jpg?w=360', category: 'underwater-world' },

        // Add more images here
    ],
    'macro-photography': [
        { src: 'https://images.ctfassets.net/h6goo9gw1hh6/35Foq0zNN5DGAg5lWqgnik/1de2cad8bb3decbfbe53ad34efb6c96a/macro-micro-difference-macro-ladybug.jpg?w=1200&h=831&fl=progressive&q=70&fm=jpg', category: 'macro-photography' },
        { src: 'https://cdn.clippingpath.in/wp-content/uploads/2023/07/Insects-and-Small-Creatures.webp', category: 'macro-photography' },
        { src: 'https://media.greatbigphotographyworld.com/wp-content/uploads/2022/12/beautiful-macro-nature-scene.jpg', category: 'macro-photography' },
        { src: 'https://img.freepik.com/premium-photo/macro-photography-beautiful-nature_608068-37842.jpg', category: 'macro-photography' },
        { src: 'https://i.pinimg.com/564x/70/5a/00/705a0030905033c31493395d5a98d43e.jpg', category: 'macro-photography' },
        { src: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2024/01/macro-photography.jpg', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyXzxqXZhqQ_3byhM2vAIulRW_zOEeEgENw&s', category: 'macro-photography' },
        { src: 'https://i.pinimg.com/originals/8a/29/e5/8a29e55f30c6fd9e1a49ae525a325efe.jpg', category: 'macro-photography' },
        { src: 'https://visualwilderness.com/wp-content/uploads/2015/09/nicaragua_2232c.jpg', category: 'macro-photography' },
        { src: 'https://www.format.com/wp-content/uploads/michael-dziedzic-LYN1tTqzY2E-unsplash.jpg.jpg', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44hKB9-5mDKj9LOufVD1Jt73_o29z8-ouaA2qwA0GgiDnzMrcox4MzUUAk-6XgwkZxiY&usqp=CAU', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROg9H_WD8KsrcV_KZQpcLM2Ux6ZWH1ANM0xg&s', category: 'macro-photography' },
        { src: 'https://images.pexels.com/photos/946727/pexels-photo-946727.jpeg?cs=srgb&dl=pexels-subin-342706-946727.jpg&fm=jpg', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NywyAmsGAjJnLT-8qO990ye9_LdngJ-viA&s', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8l2MVel5xj92_5WUEH2Jf7Ek7azFGeL9Wg&s', category: 'macro-photography' },
        { src: 'https://static.scientificamerican.com/sciam/cache/file/A0E5EC7D-4091-4C4D-9AE37FABED01C73A_source.jpg?w=1200', category: 'macro-photography' },
        { src: 'https://www.boredpanda.com/blog/wp-content/uploads/2014/04/macro-photography-miki-asai-12.jpg', category: 'macro-photography' },
        { src: 'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e58cfe7a-6945-4a98-a3c5-358d5dcf241b/m10.jpg', category: 'macro-photography' },
        { src: 'https://i.pinimg.com/236x/b2/96/d5/b296d5f603faa6d440f2612055dc9805.jpg', category: 'macro-photography' },
        { src: 'https://live.staticflickr.com/65535/51973968516_dff420ddd7_z.jpg', category: 'macro-photography' },
        { src: 'https://c1.wallpaperflare.com/preview/652/786/432/dandelion-dew-nature-flower.jpg', category: 'macro-photography' },
        { src: 'https://p4.wallpaperbetter.com/wallpaper/914/587/768/brown-and-orange-butterfly-in-close-up-photo-butterfly-wallpaper-preview.jpg', category: 'macro-photography' },
        { src: 'https://adaptalux.com/wp-content/uploads/2020/06/Pink-Grapefruit-macro-photo.jpg', category: 'macro-photography' },
        { src: 'https://amateurphotographer.com/wp-content/uploads/sites/7/2023/01/03_%C2%A9-Barry-Webb-Ice-Encrusted-Comatricha-CUPOTY-1000px.jpg', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5iEwh5e4F05PHbFQxEPYPa-UsebiImJH1Q&s', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1Mo-PKl8mnyJ9jGm9Ta8Xx2mabWcxzgkv5UteJ8FU4yse1zjNxQgPVb5OyjO5VLXl34&usqp=CAU', category: 'macro-photography' },
        { src: 'https://static-cse.canva.com/blob/561456/TinyWorldofMacro7.jpg', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1p2_FmOlmkeR4viCGyrx7k47F7bA-9BfitCr-2fq4YcHfCal7nMpcGVMgLWDjx1_aCuY&usqp=CAU', category: 'macro-photography' },
        { src: 'https://png.pngtree.com/background/20230519/original/pngtree-plastic-toy-camera-with-flowers-in-the-background-picture-image_2662741.jpg', category: 'macro-photography' },
        { src: 'https://us.123rf.com/450wm/pippocarlot/pippocarlot2307/pippocarlot230700494/208636790-miniature-toy-workers-skillfully-maneuvering-a-dslr-camera-showcasing-creativity-and-passion-for.jpg?ver=6', category: 'macro-photography' },
        { src: 'https://images-cdn.ubuy.co.in/667b5a70701e091d740b0207-greek-statues-and-sculptures-creative.jpg', category: 'macro-photography' },
        { src: 'https://adaptalux.com/wp-content/uploads/2020/01/seed-flower-potpourri-creative-macro-photography.jpg', category: 'macro-photography' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxeQwXgrUQbC2xVswRG5vaXEVJ_Tli6KXhg&s', category: 'macro-photography' },
        { src: 'https://121clicks.com/wp-content/uploads/2024/05/flower-macro-photography-ena-07.jpg', category: 'macro-photography' },
        { src: 'https://storage.googleapis.com/orms-blog/1/2013/11/Werner-Buitendag-011-600x530.jpg', category: 'macro-photography' },

    ],
    // Add more images here

    'black-white': [
        { src: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg', category: 'black-white' },
        { src: 'https://cdn.mos.cms.futurecdn.net/5PMe5hr8tjSS9Nq5d6Cebe.jpg', category: 'black-white' },
        { src: 'https://cdn.naturettl.com/wp-content/uploads/2022/10/08200219/black-and-white-landscape-photography-23.jpg', category: 'black-white' },
        { src: 'https://i.pinimg.com/736x/aa/96/0a/aa960ad407e8ec5ed71af93678273d6c.jpg', category: 'black-white' },
        { src: 'https://photographylife.com/wp-content/uploads/2014/10/Verm-lone-pine-Rogers-Lake-10701.jpg', category: 'black-white' },
        { src: 'https://cdn.naturettl.com/wp-content/uploads/2019/06/27085016/black-white-wildlife-photography-2.jpg', category: 'black-white' },
        { src: 'https://blog.zachdobson.com/wp-content/uploads/2021/06/blackandwhite-backyard-phototgraphy-12.jpg', category: 'black-white' },
        { src: 'https://i1.adis.ws/i/canon/get-inspired-black-white-nature-photography-g7-x-mark-iii-4_1ab2089558ec48de8e16dfb3f0fe4145?$media-collection-half-dt-jpg$', category: 'black-white' },
        { src: 'https://cdn.visualwilderness.com/wp-content/uploads/2019/01/BWarchFB-845x321.jpg', category: 'black-white' },
        { src: 'https://photonaturalist.com/wp-content/uploads/2018/04/sunflower_bw.jpg', category: 'black-white' },
        { src: 'https://img.freepik.com/premium-photo/black-white-image-leaf-with-leaves-pointing-up_771703-10663.jpg', category: 'black-white' },
        { src: 'https://static.vecteezy.com/system/resources/previews/024/623/247/non_2x/landscape-mountain-black-and-white-nature-outdoors-travel-mountain-range-sand-generative-ai-photo.jpg', category: 'black-white' },
        { src: 'https://www.lightstalking.com/wp-content/uploads/pexels-george-desipris-748626-compress.jpg', category: 'black-white' },
        { src: 'https://shotkit.com/wp-content/uploads/bb-plugin/cache/beach-photography-featured-1-scaled-landscape-ed6d2783e24b703d1b2ffadde4bb58da-zybravgx2q47.jpg', category: 'black-white' },
        { src: 'https://www.briancattelle.com/wp-content/uploads/2021/06/Boulder-Beach-Study-01-copy.jpg', category: 'black-white' },
        { src: 'https://blog.icons8.com/wp-content/uploads/2020/02/black-and-white-photography-1280x720.jpg', category: 'black-white' },
        { src: 'https://iso.500px.com/wp-content/uploads/2015/09/streetcover1.jpeg', category: 'black-white' },
        { src: 'https://fujilove.com/wp-content/uploads/2017/06/DSCF0362-Bearbeitet.jpg', category: 'black-white' },
        { src: 'https://www.josephfiler.com/images/xl/Florida-Everglades-5414-Edit-Edit-BW.jpg', category: 'black-white' },
        { src: 'https://i.pinimg.com/originals/e2/7c/1e/e27c1e7a7cd5cc0dea3c3bb49f0f6745.jpg', category: 'black-white' },
        { src: 'https://www.ephotozine.com/resize/articles/25904/IMGP5883.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR', category: 'black-white' },
        { src: 'https://pics.craiyon.com/2023-06-19/a00800359c3c4ab699e12238608ce0b6.webp', category: 'black-white' },
        { src: 'https://img.freepik.com/premium-photo/perfect-black-white-beach-dramatic-island-shore-landscape-dark-sky-calm-water-monochrome_663265-1715.jpg', category: 'black-white' },
        { src: 'https://cdn.visualwilderness.com/wp-content/uploads/2019/11/The-White-Dune-Death-Valley-600.jpg', category: 'black-white' },
        { src: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2018/01/bird-of-paradise-flower-846127_1280-e1515127847102.jpg', category: 'black-white' },
        { src: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2018/01/lido-di-ostia-2921903_1280-e1515125262758.jpg', category: 'black-white' },
        { src: 'https://blog.icons8.com/wp-content/uploads/old-uploads/2017/08/black-and-white-fog.jpg', category: 'black-white' },
        { src: 'https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2018/05/ERIC-KIM-STREET-PHOTOGRAPHY2.jpg?resize=2000%2C1333', category: 'black-white' },
        { src: 'https://www.ephotozine.com/resize/articles/25904/IMGP2559_bw.jpg?RTUdGk5cXyJFCgsJVANtdxU+cVRdHxFYFw1Gewk0T1JYFEtzen5YdgthHHsvEVxR', category: 'black-white' },
        { src: 'https://www.capturelandscapes.com/wp-content/uploads/2016/11/diffuser_T9A6322.jpg', category: 'black-white' },
        { src: 'https://static.vecteezy.com/system/resources/previews/036/746/334/non_2x/ai-generated-a-black-and-white-of-a-sunflower-free-photo.jpg', category: 'black-white' },
        { src: 'https://i.pinimg.com/736x/52/f9/e1/52f9e1e2e899dec49fdef5d194bf4ee1.jpg', category: 'black-white' },
        { src: 'https://cdn.contrastly.com/wp-content/uploads/2-black-white-secrets.jpg', category: 'black-white' },
        { src: 'https://p1.pxfuel.com/preview/106/704/958/flowers-s-w-macro.jpg', category: 'black-white' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Black_and_white.jpg', category: 'black-white' },

    ]


};

const imagesContainer = document.getElementById('images-container');
const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentFolder = '';
let currentImageIndex = 0;
let currentImages = [];
// Set background images for folders
folders.forEach(folder => {
    const folderName = folder.getAttribute('data-folder');
    folder.style.backgroundImage = `url(${imageUrls[folderName][0].src})`;

    folder.addEventListener('click', () => {
        currentFolder = folderName;
        loadImages(folderName);
    });
});
function setBackgroundImage(folderId, imageUrl) {
    var folderElement = document.getElementById(folderId);
    if (folderElement) {
        folderElement.style.backgroundImage = `url(${imageUrl})`;
        folderElement.querySelector('.folder-content').style.display = 'none';
    }
}

// Load images for the selected folder
function loadImages(folderName) {
    imagesContainer.innerHTML = ''; // Clear previous images
    currentImages = imageUrls[folderName] || [];
    currentImageIndex = 0;

    currentImages.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.category;
        img.className = 'gallery-img';

        img.addEventListener('click', () => openImageModal(index));

        imagesContainer.appendChild(img);
    });
}
// Open image modal
function openImageModal(index) {
    currentImageIndex = index;
    imageModal.style.display = 'flex';
    modalImg.src = currentImages[currentImageIndex].src;
    modalImg.classList.add('active');
    imagesContainer.classList.add('blur');
}

// Close image modal
function closeModal() {
    imageModal.style.display = 'none';
    modalImg.classList.remove('active');
    imagesContainer.classList.remove('blur');
}

// Show previous image
function showPrevImage() {
    if (currentImages.length === 0) return;
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : currentImages.length - 1;
    modalImg.src = currentImages[currentImageIndex].src;
}

// Show next image
function showNextImage() {
    if (currentImages.length === 0) return;
    currentImageIndex = (currentImageIndex < currentImages.length - 1) ? currentImageIndex + 1 : 0;
    modalImg.src = currentImages[currentImageIndex].src;
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Dark Mode Toggle Function
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Add/Remove dark mode class

    // Save dark mode preference in Local Storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Apply dark mode based on user preference
window.onload = function () {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const folders = document.querySelector(".folders");
    const imagesContainer = document.getElementById("images-container");
    const backButton = document.getElementById("back-button");

    // Folder par click karne par images dikhana
    document.querySelectorAll(".folder").forEach(folder => {
        folder.addEventListener("click", function () {
            folders.style.display = "none";  // Folders hide karo
            imagesContainer.style.display = "block";  // Images dikhana
            backButton.style.display = "block";  // Back button dikhana
        });
    });

    // Back button par click karne par wapas home par aana
    window.showFolders = function () {
        folders.style.display = "flex";  // Folders wapas dikhana
        imagesContainer.style.display = "none";  // Images hide karo
        backButton.style.display = "none";  // Back button hide karo
    };
});
