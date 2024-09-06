const myFriends =[{
    firstName : 'banana',
    lastName : 'Kung',
    AKA:'bane',
    age: 19

},{
    firstName : 'applekung',
    lastName : 'KURAMA',
    AKA: 'yasku',
    age: 19
},{
    firstName : 'Nattakan',
    lastName : 'Janjaronsub',
    AKA: 'konlong',
    age: 19
},{
    firstName : 'Jackl',
    lastName : 'The Ripper',
    AKA:'JACK TRP',
    age: 30
}]

const myFriendsAKA = myFriends.map(function(element,index) {
    return({
        firstName:element.firstName,
        AKA:element.AKA
    })
})

const myFriendsMoreThan = myFriends.filter(function(element,index) {
    return element.age > 19
})

console.log(myFriendsAKA)

const news = {
    "status": "success",
    "totalResults": 2373,
    "results": [
    {
    "article_id": "7f3649b74463116aac89a876f2961378",
    "title": "Why are Italian and European canned tomatoes so popular in Japanese supermarkets?",
    "link": "https://www.prnewswire.com/apac/news-releases/why-are-italian-and-european-canned-tomatoes-so-popular-in-japanese-supermarkets-302239667.html",
    "keywords": null,
    "creator": null,
    "video_url": null,
    "description": "Discover more about Red Gold Tomatoes from Europe @ AEON ITABASHI SHOPPING CENTER from the 5th to the 8th of September 2024 TOKYO, Sept. 5, 2024 /PRNewswire/ -- Italian and European Red Gold canned tomatoes – thanks to their guaranteed high quality and versatility in the kitchen – are a...",
    "content": "ONLY AVAILABLE IN PAID PLANS",
    "pubDate": "2024-09-05 15:33:00",
    "pubDateTZ": "UTC",
    "image_url": "https://mma.prnewswire.com/media/2186813/VISUAL_ASIA.jpg?p=publish",
    "source_id": "prnewswire_apac",
    "source_priority": 1822,
    "source_name": "Pr Newswire Apac",
    "source_url": "https://www.prnewswire.com/apac",
    "source_icon": "https://i.bytvi.com/domain_icons/prnewswire_apac.png",
    "language": "english",
    "country": [
    "afghanistan",
    "india",
    "australia",
    "singapore",
    "fiji",
    "maldives",
    "japan",
    "malaysia",
    "china",
    "south korea",
    "thailand",
    "pakistan",
    "mongolia",
    "brunei",
    "new zealand",
    "indonesia",
    "bhutan",
    "philippines",
    "hong kong",
    "bangladesh",
    "nepal",
    "sri lanka",
    "cambodia"
    ],
    "category": [
    "business"
    ],
    "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
    "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
    "duplicate": true
    },
    {
    "article_id": "760aec296aeff09f1b5206fcb4ed4325",
    "title": "รุมแฉเจ้าอาวาสวัดดังเป็นหนี้โยมไม่มีเงินคืน เจ้าตัวโต้ลั่นถ้ายืมจริงต้องมีสัญญา",
    "link": "https://www.dailynews.co.th/news/3831928/",
    "keywords": [
    "breakingnews",
    "hot news"
    ],
    "creator": [
    "Tanomsri Jantong"
    ],
    "video_url": null,
    "description": "โยม-อดีตกรรมการวัด ลุยแฉเจ้าอาวาสวัดดัง เป็นหนี้โยม ไม่มีเงินคืน บอกให้ไปยึดโบสถ์ แถมเป็นคนตีหน้าเศร้าเล่าความเท็จเก่ง เจ้าอาวาสโฟนอินโต้ ถ้ายืมจริงต้องมีสัญญา ยอมรับเซ็นเอกสารรับสภาพหนี้จริงThe post รุมแฉเจ้าอาวาสวัดดังเป็นหนี้โยมไม่มีเงินคืน เจ้าตัวโต้ลั่นถ้ายืมจริงต้องมีสัญญา appeared first on เดลินิวส์.",
    "content": "ONLY AVAILABLE IN PAID PLANS",
    "pubDate": "2024-09-05 15:25:17",
    "pubDateTZ": "UTC",
    "image_url": null,
    "source_id": "dailynews_co_th",
    "source_priority": 425309,
    "source_name": "Dailynews Co Th",
    "source_url": "https://www.dailynews.co.th",
    "source_icon": "https://i.bytvi.com/domain_icons/dailynews_co_th.png",
    "language": "thai",
    "country": [
    "thailand"
    ],
    "category": [
    "other"
    ],
    "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
    "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
    "duplicate": false
    },
    {
    "article_id": "369bb5cd5504da3fd3c83ef9659795bb",
    "title": "เปิดโผรางวัลคนทําหนัง ‘สุพรรณหงส์’ ครั้งที่ 32 ประจําปี 2566",
    "link": "https://www.thaipost.net/entertainment-news/651349/",
    "keywords": [
    "สุพรรณหงส์ ครั้งที่ 32",
    "บันเทิง",