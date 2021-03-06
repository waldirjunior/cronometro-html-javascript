 var horarioAgora = null;
 var horarioReal = 48;
 $(document).ready(function() {
      $('#clock').countdown('2017/10/05 20:00:00', function(event) {
          $(this).html(event.strftime('%-I:%M:%S'));
          horarioAgora = event.strftime('%-I');
      });

      console.log(horarioAgora);
      var valorNovo = 100 * horarioAgora;
      valorNovo = valorNovo / 48;
      valorNovo = parseInt(valorNovo);
      console.log(valorNovo);


    var btn = document.getElementById('button'),
    tracker = document.getElementById('tracker'),
    trackerOffset = 0,
    page = document.getElementById('page'),
    water = document.getElementById('water'),
    cnt = document.getElementById('count'),
    percent = cnt.innerHTML,
    random, diff, interval, isInProgress;

    btn.addEventListener('click', update);

    update();

    function update() {

      if (isInProgress) return;
      btn.removeEventListener('click', update);
      isInProgress = true;
      
      page.classList.add('page_animated');
      setTimeout(function(){
        page.classList.remove('page_animated');
      }, 1000);
      
      random = parseInt(Math.random() * 100);
      
      diff = percent - random;
      random = Math.abs(random);

      console.log(random);

      interval = setInterval(function(){
        
        if (diff === 0 || percent === random) { 
          btn.addEventListener('click', update);
          clearInterval(interval);
          isInProgress = false;
          return;
        }
        
        if (diff < 0) {
          percent++;
        } else {
          percent--;
        }

        percent = valorNovo;
        cnt.innerHTML = percent;
        water.style.transform = 'translate(0, ' + (100 - percent) + '%)';
        water.querySelector('.water__inner').style.height = percent + '%';

        isInProgress = false;
      }, 16);  
    }



});