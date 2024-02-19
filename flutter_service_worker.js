'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "a93489486371168416b76f108f9fd550",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7298c9982a98b673a5c522ff04a50713",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a4654ef9ec640eaa72b1b591292007e",
".git/logs/refs/heads/main": "d0f553e269eb345074a5d6419c1a8413",
".git/logs/refs/remotes/origin/main": "3272f31e0124b7b1bb0e61baf11666cd",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/12/6120de877c2dd1892b3d7e52fcb0a50169d7b3": "7532c345e46c7d748bc96c7e90912ecf",
".git/objects/20/7a913f159551398c4e781f36bcffa353675e4e": "0d90ecdb6112408667108aed2d11b51d",
".git/objects/20/94648f7fbc734088788d375d71d0d5d00a7041": "caa1cd43b581aa6516046041e5953645",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/41a0b68caa18d93b3d98955cc2108ff5e94cd7": "681dd868f86cecf94aa6ba595a58e75f",
".git/objects/38/5a72d1ef8e50aa43a48cd6d433ea05c1ca54d3": "87a6ee48f3b0b9264f3fbe860e29d0f8",
".git/objects/38/e68db074e160b369c1cf4ed05458c32fc28afd": "b1479ada27caa32bb06ee1af412b7b1b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/697e0557d98e29535f74db1d16c46bc7bb5df9": "7e0e0ee5e2a096e9d78e0eb5e1fd4e8b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/d9c52453a2957d3947413f121a190d7f63ecfe": "d9442a6406c620096642c73531dc2cb1",
".git/objects/5a/8d0067793dd1134b1b18dfcf79f1f8851c13fa": "ba81431b4d24c8a583a3726f2a505049",
".git/objects/5c/8725493bbc51b77efe30a8df2e874eafd5360c": "e4d199a4139110a92621fa294d057ed1",
".git/objects/5d/84b1eb23de4d07f2042fbd693feb8f2ec2d851": "9abc70c0bcce20e180bd5335d2ce12c3",
".git/objects/65/78a01f6239e2a64cdcda5db2094887439fe985": "26aab30964094927e2f90db5451e34e6",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/30cdc6b37f53ffff335cab587d15787e0d8326": "0e3cb2bdf3ef40f300c4d214c88cbb2e",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/a816249a80b8b742dc57012c102701147d1813": "111489ecbac60172d8841c116a7ba73d",
".git/objects/9a/ebb43833baa3d63708e756819814b18c5274fb": "174c749c286a7e7dbaf25cfb96e55ff1",
".git/objects/9b/78598ccb789d3bb05cf965488e7783be16ab57": "edb7067b52c88d25e8a03d86e4477278",
".git/objects/a6/69c69aa7866becea9c84cdb49c5cc65a503264": "ee9155e3840d5158741d6c0d325529a9",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b1/29c35d22ecb56afc4b9b9b68540b4b8da89e95": "585f41637182bb1d8d4bcfa11cd833e9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/44fdff8e6977f22021e6f92fc2a0d537a055fb": "883772b184c94e513d2e791aa656cba2",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c6/299b4a83ae6bd4ff0dbcc72ec326e021d1450b": "13b69cba8b56fb5a6e5e252bb4dd48fa",
".git/objects/c6/84971c05a22977db321d051c2a663e2898ba97": "e2167684bf23b06a72e622866fdf5895",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/86ae439df9efedf1f759e31713b3af7e3ca22a": "185b05c82f1e81a94e5cb80d80eb8252",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/a8efb81dbdfd4ab25b92b936fb0c35b779c37f": "dc9b0ca13a37ddfb59414212c0bc083d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/2923961be49a50bf6560d36ec5104ae222471b": "69ed27b34ca89057746dc75e0b66deec",
".git/refs/heads/main": "beb1843ec20162db65fd1579fb679169",
".git/refs/remotes/origin/main": "beb1843ec20162db65fd1579fb679169",
"assets/AssetManifest.bin": "886dd34c27a0da28e669d1bab427a564",
"assets/AssetManifest.json": "cf98bf61b6f2ebb583ba894e290fc48c",
"assets/assets/fonts/CustomIcons.ttf": "3de67a8f8d277f91a51b78c041967f1e",
"assets/assets/images/Background2.png": "9165df99656cade1947908943b0735a7",
"assets/assets/images/bar.jpg": "95043750bb918dc4c3d0d65f7a8c47cd",
"assets/assets/images/cups1Icon.png": "b8411e7494f2bdfd869ad8c307f853da",
"assets/assets/images/cups2Icon.png": "0be9c23053576def97ea5e28a7aac3ac",
"assets/assets/images/cups3Icon.png": "8100453ad8d0f753133e0b53471eb447",
"assets/assets/images/customIconWhite.png": "1db8388e00e13af7dcc2df1b65d6a036",
"assets/assets/images/Denmark.png": "3c4d92f21227760d99cf4958c9716133",
"assets/assets/images/dinner.jpg": "7a88d24513df61fff9cd1c73dc40bbb9",
"assets/assets/images/expenses.jpg": "6b2fd6b0978e3e804f27b5ee31e260ee",
"assets/assets/images/GameBackground.png": "4ad9ce80eb486acbb76769c1da25c4fd",
"assets/assets/images/gamePageBackground.png": "38bae203b8e43563ce7fae157a323435",
"assets/assets/images/GB.png": "e9f57be2b68c882edd329f6efe0a6f96",
"assets/assets/images/group_share_icon.png": "6175cf6a6c764dce46b2010ec521dc6e",
"assets/assets/images/iconBackgroundBP.png": "7b4c606895fba5500ddbe7a3924eb023",
"assets/assets/images/iconBP.png": "57c6b167804ea822d015f06af9101a4a",
"assets/assets/images/iconForeground2.png": "a9d8b33b2d646c4d1fca3286c98651fc",
"assets/assets/images/mig-edit.jpg": "742535aa3e789a0c0115ec8774aa7657",
"assets/assets/images/Mountain.jpg": "bdb7b93c507e126010521720a234d550",
"assets/assets/images/OneBrightProduction.png": "2f0b4dc20109b9de8c92344af5bf9e60",
"assets/assets/images/party.jpg": "04f0f6eac6133e7a19453aa550dcf924",
"assets/assets/images/road.jpg": "0c6cab6faed104e85f6b8d5b6507b562",
"assets/assets/images/ShotKing3.png": "368875978ba249ad840b1087c578bfa8",
"assets/assets/images/trip.jpg": "573983a0a3addb55ce65c1ea3bd95215",
"assets/FontManifest.json": "f8ec27312bf02bf4ac4f918c39934293",
"assets/fonts/MaterialIcons-Regular.otf": "f33eef14172313f3e899b18d7593539c",
"assets/NOTICES": "29165d1297098d7dec45fe0ad9f24a3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57afeeeae9888c3216ee36b9d8a92ade",
"/": "57afeeeae9888c3216ee36b9d8a92ade",
"main.dart.js": "e4da321b434689edda309f5bcc38e37f",
"manifest.json": "cc7296cae4f33af4d93b1ae6de38f9a3",
"version.json": "493e3dd114bc38996027421d9aad5409"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
