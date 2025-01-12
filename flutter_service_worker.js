'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
"version.json": "389a6e6e6f34312743ca5f36467c84b5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "3c281d29eb355ba1e06491d5bbe77102",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"assets/AssetManifest.bin": "1dc477ab8b6aa834ee2efffb209462a4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cf4498f02396c4a68dd9f2d632de0316",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/python_png-removebg-preview.png": "b5c3860107adc54701cc61b662591419",
"assets/assets/images/figma-removebg-preview.png": "0995e3c898960e2c98a95d11e97a88c7",
"assets/assets/images/C_logo-removebg-preview.png": "f7ddca8cc6cb17aedc5e86c2c977ad50",
"assets/assets/images/Neutral%2520Minimal%2520Phone%2520Frames%2520Mockup%2520Pinterest%2520Pin.png": "d4fb2c758e64b0118a46f92699be2541",
"assets/assets/images/Black%2520and%2520Beige%2520Stylish%2520Product%2520Launch%2520Pinterest%2520Pin.png": "2d43f30fc15cbe80fce66986c955c5f1",
"assets/assets/images/sankt-petersburg-russia-24-08-2023-twitter-new-logo-twitter-icons-twitter-x-logo-free-png.jpg": "33dbb96bf36d6fd67bd3dce79f760dab",
"assets/assets/images/casey-horner-RmoWqDCqN2E-unsplash.jpg": "b72b17ac1d653ddab7687e68ab398904",
"assets/assets/images/Beige%2520Phone%2520Wallpaper%2520Mockup%2520Your%2520Story.png": "65fca5fabc39f04c4a3d9cd2e065c2ba",
"assets/assets/images/sql-removebg-preview.png": "7f143d5ad024da2bdc5b9f716f3fb41d",
"assets/assets/images/flutter_icon-removebg-preview.png": "8c643903354a8b44496d37c2436762b5",
"assets/assets/images/profilephoto.jpg": "275e72793e66a0e1164494fe4d725c04",
"assets/assets/images/manny-becerra-mMUo6jghVa8-unsplash.jpg": "f8c7124c74e97ff2b38cf769cfcf02e4",
"assets/assets/images/java_logo-removebg-preview.png": "49328fc15af69897c367ebd9a6259df8",
"assets/assets/images/Orange%2520and%2520Black%25203D%2520Maximalist%2520Technology%2520Instagram%2520Story.png": "d473a905dc459fd71a43ee2797f0218c",
"assets/AssetManifest.bin.json": "8850fed5576a7392acbbc73b01304c69",
"assets/AssetManifest.json": "b0fb73cd2227a4e3a2bbee52a2850c79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/NOTICES": "8bf8e153b0d4e5ae03bc98bf8d950eea",
"index.html": "73afc5f9b960320b933b65dfc3d428ce",
"/": "73afc5f9b960320b933b65dfc3d428ce",
"flutter_bootstrap.js": "7a5a0238613c76ac9249ee917b4030ea",
".git/AUTO_MERGE": "439e4488c4feb98264ba3fecf5d1d378",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "92a824a3d1ac9d6b23af78ab512e7f5b",
".git/FETCH_HEAD": "a26baf80fed7f4d951140f18905be200",
".git/logs/HEAD": "535ac73c3dcaae591e496f46d7172f89",
".git/logs/refs/heads/main": "b4ac7da57f813267ffa1fa574d241d78",
".git/logs/refs/remotes/origin/main": "ff3b60385515c05bbccbd4cb496389ee",
".git/objects/e5/7190afb8a108238ec663272feb502dc85b1297": "d99f3a0d426d88a91f88723db6cb51c1",
".git/objects/1d/32448c13fb362938385cc4799da11dc8bab800": "360e968c724e1f1281920e11e8879058",
".git/objects/ae/081c10157a6e054d2e229a693f5357a1ab9f86": "dd193a96992437d30e78148f97c6e592",
".git/objects/ae/ea5b2a1ad726a2101f4681cd2ff19646924ee0": "701ddde3f3fc3d729ba09026f3cfbd21",
".git/objects/c5/d87c5b2d852ae01ea8e531ea322dfe874f351d": "3b4814ad18a4dc8837b974238da630f7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/1e/e857a4c034068435a3979a104e63286217f07a": "6a0c5d5c7a7cc2160c4510a46f7a5dd5",
".git/objects/de/604871ac44d652a3c91b42e717ab57c0668994": "05c7f6254241399abf8ba63a6d633164",
".git/objects/0c/404ac83e06028a50b7eff818cda6ce0b724405": "103d1d0bb6fea0ebef47196559fa2833",
".git/objects/1a/6f7f31249a73bb0c42a39ed01e7095ba4034e2": "df994667a8e0a4e30486ae33aac252d9",
".git/objects/1a/9eb1bf334f82da0511861efcdf369e23f29f31": "fed12e88ab9ba0d8a2407513b54cdd0f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/3f/da2e8c292c01bcfc0701fbcd88a578b725c07a": "b6dc0ba0c523737f0a8fe200460e5059",
".git/objects/30/f0c494bb0065d080fd55645b7dda29c046b1ab": "add93b47ebb03af9d05e1f3b2557ed0e",
".git/objects/79/64c809d4e56c2e6524cd8c3bd865a0977569bd": "b00ad505740d949b5773889869812920",
".git/objects/95/ee1b9811370ba89a11b6ba04b19dd668098522": "fe1662b06bc1a8b3b32ba8327c26cd26",
".git/objects/67/01385ac8730e2afbcd4f95bf0ee2c0e202f413": "05b72a8611c7626b9182690faf7b7087",
".git/objects/37/9770c5629b726508cb00fbbcf4e4e0b43d4101": "bf39700020fd0e54cf1b2fb22e34b1f2",
".git/objects/03/46a870988f923a4f5434e5ce22509debf15e38": "8d7c645f723b9dfeb1bf7d593d1ae542",
".git/objects/17/a2fe4cc19887252214b762a29a4bcfba60280b": "cc818801306d065492e0e40de39d5ea3",
".git/objects/11/9f5c76e12cb6c4f2f8339f40b759c76adb6d44": "5ef7b407fba3700d02a62054173695aa",
".git/objects/6b/3892b005380eee228aa038a360f51ed9df3b71": "6c8b63f4315ce55cd999ce9edcecd020",
".git/objects/6b/7d6a0f68a2db509d4e9a9d1650e5b03d8530c6": "ce4521d13884a919dc69571100e75543",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/a5/c877a53132f84b1d13a8385c6aef0922418fbf": "5c9ba9ee125034720560bbb70ecf43a6",
".git/objects/a5/f00073912c65d2b2f684be9497e94267703563": "302884347105689f0ccd724fbfee4b6c",
".git/objects/41/1e878f11fc4a460c14c119b2d12520927962f6": "61277dfe5d39dd5236633c35b237d5a8",
".git/objects/41/9110a2899bf74ffac8ca5a73d1058703541b87": "16b6a84ac95d6f707e0b4b3e73aed170",
".git/objects/8c/f66736ce23cd77e1584fece9f4f2cdc545be84": "3b546cce1718dbdb7e93803db64c3a8a",
".git/objects/89/c7c1e7e398e1df7068da38dca4feafe0fab785": "b5ced202cdbc40c7e286abf6e2b37282",
".git/objects/89/17a6e3093ec90a872adeb0cde98ffccea481ed": "0fe9d6548ad9c8ee2052eaf19590715a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/38/4e7b2ffabd3c091c055b4045807853bbe87de5": "a6401282f79959c856bde533fb2e531d",
".git/objects/ea/0699807470f1264b2148f275dc4ea9a8c1198f": "fec7178648ae2fd0e2223eb242405aa5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b67b61c5e0c09657e4641859fb475aaa88e7f6": "ebb5a148bb5133575a3c235ebfe78c02",
".git/objects/fb/343201a1cce97dfa304314c89d1977eb38dd1b": "c4f045f9ac83151a51c251abbca0bac8",
".git/objects/70/198397b7e9a3c41343012c5543f135722266c7": "7f4283b78000add2930512278579c517",
".git/objects/cb/fc9aa971f48a4ee8a5a46a4e73476aebc6ca82": "ac30c49d62b93144ad0835a433a0f6c9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/101ea23421ae12de7c20b19ec47fdddb001ae7": "1d72fab9a15324d2541bbf093970b6f4",
".git/objects/b7/d7512a0ce6d5a8d5bb17c71351d31299f3ed86": "2f3f8d722b4cfe3fb32daa1d8b08a0b7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/7c/1bbd9fae83d4e90b06769ece99d5b8db893f75": "97ebb06925dcd31ae1b75eb03385ca4a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/46a83f1263a312acbc2dc5b50a618aea47d9cd": "74931604ffba3bad0c544a4a96c0265b",
".git/objects/4c/2c96fb91e5043948ece0817200361f7a51c65d": "be081d4c61f8d9403dfa741b83aa0ef2",
".git/objects/3a/42e938768b16107c851a0f48351bc628479afd": "a4f52df3f91e69eb01478abffd00ef9b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/6a01db9931658e17c8814c1397c7e6b4ef9788": "5ae3bfe469d6a1a1685c7cdaf6254652",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/152707aa2f48ebfdc3002962cdd5536d5e510a": "9163cd97faa55f5f2ae4504c1115270e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/c6bc864cd26f70c49544aaed23665b6360a85e": "efc0d67acfb970654d35370eb63f6272",
".git/objects/19/77b72ea5137c25e4c858bc592f2c49e187aca3": "42acb199bb942120d9cec77b9b934808",
".git/objects/c8/3d75fc8cd9b185c1d16824e94b25f8eb0bc57e": "f7b57e0b458d3f8a9f6c4401271d0d32",
".git/objects/6f/1914cc1302e056ba8ed54f6c2b7ce938351b0c": "ad4e421fed1a57298bbd756f238af571",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/3b/068412261fd9acb4130debf513b8d0486664e3": "fe428fac9fb0142c312c4d1f35709428",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/a963ebeb0c5e7dd7875888be5607f7b01fb679": "5bffd7094cce0c24a8b44cd31dce278c",
".git/objects/77/a6f973b68550b8a13139d4f450adae36dfa9bd": "8ea66581f05e67d6fbe2d29ca0e71fd0",
".git/objects/d2/cb6bb752b6504ccc971d2732db1c099a857aba": "482821976337372fe2f1bb2a54f61ac7",
".git/objects/d2/245b0d8819e4bb306aae7632adec85c7d54ffe": "475265d85b8fdbede1af94842b86d3e1",
".git/objects/a3/4278da525f6772354c41eb58e93bdcafd36fca": "872a58a6c2714e02c77ae73b41d6f923",
".git/objects/3d/aead88e79661dc4bc40e8a37e6e33bdc5a907e": "f1301cc720035a368fe8c2dad053cbbc",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/51/6f9bf73ccb26332ba1715ef8b214d94b01c3c5": "83eafef421d1d78dcff5740c3f8482bc",
".git/objects/9c/7925d2d3b2b8297cfeb76dde090bdb8835381f": "8b46fb12ffe971e5bdde4550ab1f85cc",
".git/objects/61/6c90edeec0c1c551f03bbfef71ffbe6ea0a654": "010292e7823227f914b0a5a6b2b8666f",
".git/objects/81/5928fe9dbadf268440f3a814a8f0e50e5a8277": "bfa8118d67eb3918038bc25e4fffc88f",
".git/objects/2d/483a548cbf161afe02456fe9c31e6f21e92b78": "a280ac2b17c7e247475100395eb00df7",
".git/objects/a1/9968241df9314c1633ac183bc0e3b531b35eeb": "0c0afa036356fdc3290d095f74a2d405",
".git/objects/10/f278c47839127232099e1af59cc3c1b9b06b01": "cd946d56c6b041a9ab21e9b086a2c751",
".git/objects/f5/2c79af6d7032729cf0f51d04ca5cfab1547363": "f7c75dec15c94810e7e5fc91471b9b17",
".git/objects/aa/56f6265dbf5b530899d3cff3e690f2a04d8bbf": "5ad6b9d2ff08028da462fad5eef1dca1",
".git/objects/bf/2e7f7cb75b9b99d1ea430325cac9ed85ca1fbd": "420a9f35a7463f82ff21befb5d81bcfd",
".git/objects/34/28fcc7f8521f073012aa5908d71947ea4bffb5": "2caba13061c6d544c2ff0858ae73874a",
".git/objects/cd/3f6f00ee073204b5518376d8b98c42fcd796b7": "b41f7ddad8516df6371489d711068810",
".git/objects/d6/72f9270ff9fb256cb255fc31b93a19b54c0d3a": "dc77cc9e628c6ea3f689c3cbb98d0073",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9a098b0da5449ee297cef0c22e3546eda76817": "1b2b97b23cf808049c46f790b622bf6e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/22/1225f6cb4c684909154b9d63d2699e15ce3a6b": "8ac0e5473f4474a68552c146e6ae7bdf",
".git/objects/63/60ae81f10db3f30f1ec6276a6543411b678058": "9fb10928c9ddbf87e039b66d6ad22df9",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/4b/dd225a13036d3a309028b5be50c68a004a1a87": "d6292a3b5b4302e1ffd92cbf16a144e9",
".git/objects/66/6337089b2687324eadcdcc739633a13f3e9f6d": "4ed5fb20fdabef23e54f6c79e250bf2c",
".git/objects/5a/5a39e10ada9d707851870797472892e19a7a1f": "bc72c387d3d40d1da7d828b752da9572",
".git/objects/14/7a808f455548d41c3bba458f264abee272a857": "faa2c3d51462c69404dfe73b9f9d951c",
".git/objects/94/4278edc645ca110e9e6bce290fa8d52e788e93": "c3f3885f591edb06d2fd98237523df63",
".git/objects/96/0bd79e675b5f91157b0abd90fc457509646733": "78504862d697c86a902d3ec149ab4f9b",
".git/objects/ec/8d5e13bfde2f53488dcbf18ae09df174f2d9b1": "fe08f6197fe2dc69f11282ae28572b6e",
".git/objects/25/900b0ae44fa4a7702b26ac26148f87ee99b434": "9cc7499062d54c42eeb87ebca520b05d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/f3/f5f8a4bc2400e369849da629adc9ab2b78cf51": "8a0cc045c10b50cb1e9c618c29069e5c",
".git/objects/09/8e8b45f32d928c5e40406787ac5b7f7fbfa6d2": "a84c9659d5668cfd312b3be512609512",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/20c16749352e6e115c5d4c9dd7780bb34bfe84": "ea63f35761c5185e766817ece430d733",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/a9/3c24258783ee5fbacc654214ed09fb0ee0bc38": "ffda01497d75d3fd6fafe41d590c2304",
".git/objects/ee/6c31e01045fa80c7994fe50e823a44beb94f2e": "3a4345d9c5867d487d0b664f58b85e61",
".git/objects/fc/d739288bd528cfa39662dc1ddb103d45d42c4e": "5ea9d6aa42a843425d9aff1700892214",
".git/objects/fc/9ce7db45dec026fb0bad94b59e70f49593f117": "85facc6fe72382181645b4419bedd7fb",
".git/objects/e3/06431de308e5cfd32c6f8d705a9336790409b5": "7ef7fe5accedb34b0006aa464c544a84",
".git/objects/1c/5060eea132612665007f291473747ce618de95": "b437fbd7d702806bebe00bc0bc8bcd82",
".git/objects/eb/e0e12c7e878fc24608016db1ec9381c428b233": "12173d3cfe20f903d21a6d42e3bdb98c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/b9/98ce4fdce2196fc618a7b90c1145c557b3d682": "903519331df28074783bb526d9796290",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/refs/heads/main": "25d4da46c0756a9fa5ca74ea05f64518",
".git/refs/remotes/origin/main": "25d4da46c0756a9fa5ca74ea05f64518",
".git/index": "721f64252dd807bde9b8acd281bb570f",
".git/ORIG_HEAD": "b7eaed03824cd4ee921be434389f87a4",
".git/COMMIT_EDITMSG": "129e3c44d1c0d09a343fc59ec786c7fb",
"README.md": "c3cea9bee17f6b8eebbc153a8ca5fef9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
