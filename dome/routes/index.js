


const requireRoute = require.context(".", true, /\.route\.js/);
let errorRoutes = []
let routes =[]

requireRoute.keys().forEach(fileName => {
  const moduleRoutes = requireRoute(fileName).default;
  if (Array.isArray(moduleRoutes)) {
    if (fileName.startsWith("./error")) {
      errorRoutes = moduleRoutes;
    } else {
      routes.push(...moduleRoutes);
    }
  }
});


