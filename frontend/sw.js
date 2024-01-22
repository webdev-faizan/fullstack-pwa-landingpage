// serviceworker.js

// Register the service worker
self.addEventListener("install", (event) => {
    console.log("Registering service worker");
  
    // Cache the static files
    event.waitUntil(
      caches.open("staticfile1").then((cache) => {
        return cache.addAll([
            "/",
            "/index.html",
            "/public"
          ]).catch((error) => {
          console.error("Error caching resources:", error);
        });
      })
    );
  });
  
  // Handle requests
  self.addEventListener("fetch", (event) => {
    console.log("Fetching resource");
  
    // Check if the resource is in the cache
    event.respondWith(
      caches.open("staticfile1").then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then((networkResponse) => {
              // Cache the fetched response
              cache.put(event.request, networkResponse.clone());
  
              return networkResponse; // Serve the fetched response
            })
            .catch(() => {
              // If fetching from the network fails (offline), serve a fallback response
              return caches.match('/offline.html');
            });
        });
      })
    );
  });
  