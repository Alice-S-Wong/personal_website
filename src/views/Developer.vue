<template>
  <div class="home">
    <div id="wrapper">

        <!-- Header -->
          <header id="header">
            <h1>Alice Wong</h1>
            <p>Web Developer</p>
          </header>

        <!-- Main -->
          <div id="main">

            <!-- Content -->
              <section id="content" class="main">
                <!-- <span class="image main"><img src="images/pic04.jpg" alt="" /></span> -->
                <h2>My Tech Stack</h2>
                <p>HTML, CSS, JavaScript, Vue.js, Ruby, Rails, Python, Django, SQL</p>
                <h2>My Current Projects</h2>
                <p>My current project is learning more about Python and Django and building my first Django app. I hope to learn PHP and Laravel in the future, and also Java and C.</p>
                <p>I am working on several collaborative projects with fellow developers currently as well. These include some smaller projects in Python, and an app to help people find public restrooms in various cities, with ratings so people know the quality of the restroom before choosing to use it.</p>
                <h2>Mischief Writings</h2>
                <p>A blog app for a client who is a writer so they can post their stories in chapters and have visitors leave comments. This project involves Rails and SQL for the backend, and Vue.js for the frontend. This project involves admin authentication and admin-only tools for managing the site so the client can upload, edit, and delete stories and story chapters, and also manage and delete comments they do not want. This is to allow for the client to manage the site with minimal need for me, the developer to manage the site on thier behalf.</p>
                <h2>Dragon Gamer</h2>
                <p>I created this app as a place for gamers to express their game preferences, see other gamers' game preferences, and to access information and statistics on video games. Users can view games or search for games, and view information on them. Users can create lists of games they've played, games they want to play, and favorite games. Users can view others' lists if set to public. Users can also review games. I also created statistical calculators for fans of the Pokemon and Fire Emblem series as an add-on for the app. The app was built in Rails with an SQL database for the backend and Vue.js for the frontend. It relies on two external APIs, IGDB for video game data, and PokeAPI for Pokemon data.</p>
                <ul class="actions">
                  <li><a href="/" class="button">Return to Main Page</a></li>
                </ul>
              </section>
          </div>

        <!-- Footer -->
          <footer id="footer">
            <section>
              <h2>Useful Links</h2>
              <ul class="icons">
                <li><a href="https://github.com/Alice-S-Wong" class="icon brands fa-github alt"><span class="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/alice-s-wong/" class="icon brands fa-linkedin alt"><span class="label">Linkedin</span></a></li>
              </ul>
            </section>
            <p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
          </footer>

      </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {}
};
</script>