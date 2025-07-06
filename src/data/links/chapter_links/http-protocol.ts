import { resourceLink } from "@/lib/interface";

export const articles: resourceLink[] = [
  {
    title: "HTTP - MDN Web Docs",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    description:
      "Comprehensive documentation covering HTTP protocols, methods, headers, and status codes. Includes practical examples and best practices for web developers working with HTTP requests and responses.",
  },
  {
    title: "Understanding HTTP Basics",
    href: "https://www.w3.org/Protocols/rfc2616/rfc2616.html",
    description:
      "The official HTTP/1.1 protocol specification from W3C, detailing the foundational elements of HTTP including request methods, status codes, headers, and caching mechanisms. Essential reading for understanding web protocol standards.",
  },
  {
    title: "An Overview of HTTP",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
    description:
      "A beginner-friendly overview of HTTP concepts, explaining the client-server model, request-response cycle, and how browsers interact with web servers. Perfect for those new to web development.",
  },
  {
    title: "HTTP/2 Explained",
    href: "https://daniel.haxx.se/http2/",
    description:
      "A detailed exploration of HTTP/2 protocol, covering multiplexing, server push, header compression, and how it improves upon HTTP/1.1. Written by Daniel Stenberg, the creator of cURL.",
  },
  {
    title: "HTTP Security Best Practices",
    href: "https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/",
    description:
      "OWASP's comprehensive guide to HTTP security, covering common vulnerabilities, secure headers, HTTPS implementation, and best practices for protecting web applications.",
  },
  {
    title: "Understanding CORS",
    href: "https://web.dev/cross-origin-resource-sharing/",
    description:
      "Deep dive into Cross-Origin Resource Sharing (CORS), explaining how it works, common pitfalls, and best practices for implementing secure cross-origin HTTP requests in web applications.",
  },
  {
    title: "HTTP Caching in Detail",
    href: "https://web.dev/http-cache/",
    description:
      "Comprehensive guide to HTTP caching mechanisms, including browser caching, cache-control headers, ETags, and strategies for optimizing content delivery through effective cache management.",
  },
  {
    title: "HTTP/3 Explained",
    href: "https://http3-explained.haxx.se/",
    description:
      "In-depth exploration of HTTP/3 and QUIC protocols, discussing improvements over HTTP/2, reduced latency benefits, and how it handles connection migration and packet loss recovery.",
  },
];

export const courses: resourceLink[] = [
  {
    title: "HTTP Fundamentals",
    href: "https://www.pluralsight.com/courses/http-fundamentals",
    description:
      "Learn the fundamentals of HTTP protocol and web communications. Covers request/response cycles, headers, status codes, caching, authentication, and real-world debugging techniques using browser tools.",
  },
  {
    title: "HTTP and Web Servers",
    href: "https://www.udacity.com/course/http-web-servers--ud303",
    description:
      "Understanding how web servers work and handle HTTP requests, including server configuration, routing, error handling, and performance optimization. Includes hands-on projects building a basic HTTP server.",
  },
  {
    title: "Web Security & HTTP/HTTPS Fundamentals",
    href: "https://www.coursera.org/learn/web-security-basics",
    description:
      "Deep dive into web security protocols, SSL/TLS certificates, HTTPS implementation, and common security vulnerabilities. Learn how to secure web applications and protect against common attacks.",
  },
  {
    title: "Advanced HTTP Networking",
    href: "https://www.linkedin.com/learning/advanced-http-networking",
    description:
      "Advanced concepts in HTTP networking including load balancing, proxies, content delivery networks (CDNs), and optimizing web performance through HTTP protocol features.",
  },
];

export const resources: resourceLink[] = [
  {
    title: "HTTP Status Codes Reference",
    href: "https://httpstatuses.com/",
    description:
      "A comprehensive reference for HTTP status codes, including detailed explanations, common use cases, and best practices for implementing proper error handling in web applications. Includes examples and troubleshooting tips.",
  },
  {
    title: "HTTP Headers Reference",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
    description:
      "Complete reference of HTTP headers from MDN, explaining standard and custom headers, their purposes, syntax, and practical usage scenarios. Includes security headers and caching directives.",
  },
  {
    title: "RESTful API Design Guidelines",
    href: "https://restfulapi.net/",
    description:
      "Best practices for designing RESTful APIs using HTTP, covering resource naming, HTTP methods, status codes, authentication, versioning, and documentation. Includes real-world examples and common patterns.",
  },
  {
    title: "HTTP Archive (HAR) Analyzer",
    href: "https://toolbox.googleapps.com/apps/har_analyzer/",
    description:
      "Tool for analyzing HTTP Archive files, helping developers understand network performance, request chains, and optimize web applications. Includes visualization of waterfall charts and timing data.",
  },
  {
    title: "HTTP Toolkit",
    href: "https://httptoolkit.tech/",
    description:
      "Interactive debugging proxy for inspecting, testing, and mocking HTTP(S) traffic. Essential tool for developers working with web APIs, microservices, and complex HTTP interactions.",
  },
];

export const books: resourceLink[] = [
  {
    title: "HTTP: The Definitive Guide by David Gourley and Brian Totty",
    href: "https://www.oreilly.com/library/view/http-the-definitive/1565925092/",
    description:
      "Comprehensive guide covering all aspects of HTTP protocol, including architecture, data flow, caching, connection management, and security. Perfect for developers seeking deep understanding of web protocols.",
  },
  {
    title: "Learning HTTP/2 by Stephen Ludin and Javier Garza",
    href: "https://www.oreilly.com/library/view/learning-http2/9781491962435/",
    description:
      "A practical guide to HTTP/2 protocol, exploring performance optimizations, server push, stream prioritization, and migration strategies from HTTP/1.1. Includes real-world case studies and implementation examples.",
  },
  {
    title: "Web Performance in Action by Jeremy Wagner",
    href: "https://www.manning.com/books/web-performance-in-action",
    description:
      "Detailed exploration of web performance optimization, including HTTP protocol efficiency, caching strategies, compression techniques, and modern delivery optimizations using HTTP/2 and beyond.",
  },
  {
    title: "High Performance Browser Networking by Ilya Grigorik",
    href: "https://hpbn.co/",
    description:
      "In-depth analysis of networking protocols including HTTP/1.x, HTTP/2, and QUIC. Covers performance optimization techniques, TCP/IP fundamentals, and modern web application delivery strategies.",
  },
  {
    title:
      "RESTful Web APIs by Leonard Richardson, Mike Amundsen, and Sam Ruby",
    href: "https://www.oreilly.com/library/view/restful-web-apis/9781449359713/",
    description:
      "Comprehensive guide to designing and implementing RESTful APIs using HTTP, covering hypermedia, client-server architecture, resource modeling, and API evolution. Includes practical examples and design patterns.",
  },
  {
    title: "Web Security: A WhiteHat Perspective by Wu Hanqing",
    href: "https://www.amazon.com/Web-Security-WhiteHat-Perspective-Hanqing/dp/1492053112/",
    description:
      "Deep dive into web security focusing on HTTP-based attacks and defenses. Covers HTTPS implementation, secure headers, authentication mechanisms, and practical techniques for securing web applications.",
  },
  {
    title:
      "HTTP/3 and QUIC: The Definitive Guide by Lucas Pardue and Alessandro Ghedini",
    href: "https://www.manning.com/books/http3-and-quic",
    description:
      "Comprehensive exploration of HTTP/3 and QUIC protocols, covering implementation details, performance benefits, security considerations, and migration strategies from HTTP/2. Includes practical deployment guidance.",
  },
];
