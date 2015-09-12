<!DOCTYPE html>
<html lang="en">
  
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Kennel Gettysburg, PA - Dream On Acres Boarding Kennel</title>
    <meta name="description" content="Dream On Acres Boarding Kennel of Gettysburg, PA. Clean and Secure Facility, Fenced Play Areas, Homemade Dog Treats. Call 717-677-7930." />

    <link href='http://fonts.googleapis.com/css?family=Lobster|Roboto:300,300italic,400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link href="/css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="/css/photoswipe.css" rel="stylesheet"> 
    <link href="/css/photoswipe-skin/default-skin.css" rel="stylesheet"> 
    <link href="/css/styles.css" rel="stylesheet">

    <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
      <script>window.jQuery || document.write('<script src="/js/jquery-2.1.3.min.js"><\/script>')</script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/photoswipe.min.js"></script> 
    <script src="/js/photoswipe-ui-default.min.js"></script> 
    <script src="/js/jquery.debouncedresize.js"></script>
    <script src="/js/fastclick.js"></script>
    <script src="/js/scripts.js"></script>
  </head>

  <body>

    <section id="home">
      <div class="text">
        <h1>Dream On Acres</h1>
        <h2>Boarding Kennel</h2>
        <div class="color-bar"><span></span><span></span><span></span><span></span></div>
        <h4><a href="https://www.google.com/maps/place/Dream+On+Acres/@39.905785,-77.213139,15z/data=!4m6!1m3!3m2!1s0x0:0x4216c0eed3be25ae!2sDream+On+Acres!3m1!1s0x0:0x4216c0eed3be25ae" target="_blank">326 Shrivers Corner Rd.<br />Gettysburg, PA 17325</a><br /><a href="tel:7176777930">717.677.7930</a></h4>
        <div class="icon"><a href="#about-us" class="smooth-scroll"><img src="/images/arrow-down.png" alt="Arrow Down" /></a></div>
      </div>
      <div class="slides">
        <div class="slide slide-3"></div>
        <div class="slide slide-2"></div>
        <div class="slide slide-1"></div>
      </div>
    </section>

    <section id="nav">
      <nav class="navbar navbar-inverse">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand smooth-scroll" href="#home"><img src="/images/dog-icon.png" /> Dream On Acres</a>
          </div>
          <div id="main-nav" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#services-pricing">Services/Pricing</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <section id="about-us" class="body-section">
      <div class="container">
        <h1>&bull; About Us &bull;</h1>
        <div class="row">
          <div class="col-sm-4"><p><img class="img-responsive" src="/images/column-1.jpg" alt="Dog" /></p><h2>Dags</h2><p>Puppy kitty ipsum dolor sit good dog walk food slobbery kitty fluffy puppy finch groom lol catz commands ball ferret wag tail. Yawn small animals parakeet canary dog house bird seed whiskers warm litter.</p><p>Tooth park dog house meow turtle fetch fish canary tooth tail paws vitamins. Aquatic Snowball play lol catz smooshy scratch Scooby snacks string crate Snowball fetch gimme five foot kitten finch whiskers. Wet Nose kitty cockatiel birds house train catch turtle.</p><p><a class="btn btn-danger">Learn More</a></p></div>
          <div class="col-sm-4"><p><img class="img-responsive" src="/images/column-2.jpg" alt="Dog" /></p><h2>You like dags?</h2><p>Puppy kitty ipsum dolor sit good dog walk food slobbery kitty fluffy puppy</p><p>Finch groom lol catz commands ball ferret wag tail. Yawn small animals parakeet canary dog house bird seed whiskers warm litter. Tooth park dog house meow turtle fetch fish canary tooth tail paws vitamins. Aquatic Snowball play lol catz</p><p>Smooshy scratch Scooby snacks string crate Snowball fetch gimme five foot kitten finch whiskers. Wet Nose kitty cockatiel birds house train catch turtle.</p><a class="btn btn-danger">Make an Appointment</a></p></div>
          <div class="col-sm-4"><p><img class="img-responsive" src="/images/column-3.jpg" alt="Dog" /></p><h2>Oh, dogs. Sure, I like dags. I like caravans more.</h2><p>Puppy kitty ipsum dolor sit good dog walk food slobbery kitty fluffy puppy</p><ul><li>foobar</li><li>bazbuz</li><li>watwat</li></ul><p>catz smooshy scratch Scooby snacks string crate Snowball fetch gimme five foot kitten finch whiskers. Wet Nose kitty cockatiel birds house train catch turtle.</p><p><a class="btn  btn-danger">Do Something Else</a></p></div>
        </div>
      </div>
    </section>

    <section id="services-pricing" class="body-section">
      <div class="container">
        <h1>&bull; Services / Pricing &bull;<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></h1>
      </div>
    </section>

    <section id="gallery" class="body-section">
      <div class="container">
        <h1>&bull; Gallery &bull;</h1>
        <div class="staggered">

          <?php
            $dir = "images/gallery";
            $files = array();
            if(is_dir($dir))
            {
              if($dh = opendir($dir))
              {
                while(($file = readdir($dh)) !== false)
                {
                  if($file != '.' && $file != '..' && $file != 'thumbs')
                  {
                    $files[] = $file;
                  }
                }
                  
                closedir($dh);
              }
            }
          ?>

          <?php foreach($files as $file): ?>
            <div class="item"><a href="/images/gallery/<?php echo $file; ?>" style="background: url(/images/gallery/thumbs/<?php echo $file; ?>) center center;"></a></div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <section id="contact" class="body-section">
      <div class="container">
        <h1>&bull; Contact &bull;<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></h1>
      </div>
    </section>

    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div> 
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>