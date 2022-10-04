$(function(){

    
        var link = $('ul li a')

  link.on('click', function(){
  	var seletor = $(this).attr('href');  
  	var posicao = $(seletor).offset().top;
  	$('html, body').animate({scrollTop: posicao}, 1000);
  })
     
    //    link.on('click', function(){})
         
    

    const serv = 
    [
        {title:'Consultoria', desc:'A Consultoria é uma prestação de serviços feita por profissionais especializados. Ela atua com equipes de especialistas dentro das áreas que envolvem aquilo que o cliente precisa resolver.'},
        {title:'Mentorias', desc:'Mentoria é a influência, orientação ou direção dada por um mentor. Um mentor é alguém que ensina ou dá ajuda e conselhos a uma pessoa menos experiente.'},
        {title:'Plano de ação', desc:'O Plano de Ação alinha as soluções para os problemas organizacionais e auxilia na melhoria de resultados, assim é possível atingir as metas dos projetos e os objetivos da sua estratégia..'},
        {title:'Visitas Domiciliares', desc:'Validação de um instrumento para registro e acompanhamento dos indivíduos e das famílias'},
    ]

    serv.map((i)=>{
        $('.servicos').append(`
            <div class="cx">
                <h1>${i.title} </h1>
                <p>${i.desc} </p>
            </div>
        `)
    })


    $('box-icon').click(()=>{
       $('.nav ul li').toggle()
        // return false
    })
    $('button').click(()=>{
        alert('cliquei para agendar')
        return false
    })
    
})