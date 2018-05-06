const inTITLE = document.getElementById("idTITLE"),
  in0 = document.getElementById("idN0"),
  in1 = document.getElementById("idN1"),
  in2 = document.getElementById("idN2"),
  in3 = document.getElementById("idN3"),
  in4 = document.getElementById("idN4"),
  in5 = document.getElementById("idN5"),
  in6 = document.getElementById("idN6"),
  in7 = document.getElementById("idN7"),
  in8 = document.getElementById("idN8"),
  in9 = document.getElementById("idN9"),
  in10 = document.getElementById("idN10"),
  in11 = document.getElementById("idN11"),
  inFOOT = document.getElementById("idFOOT");

var iTITLE = 0,
  Z = 0,
  A = 0,
  B = 0,
  C = 0,
  D = 0,
  E = 0,
  G = 0,
  H = 0,
  I = 0,
  J = 0,
  K = 0,
  L = 'Copyright 2018 Rex Russell',
  Copy2 = '<br><br>',
  Copy3 = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',
  Copy4 = 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.',
  Copy5 = 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
  CopyRight = L + Copy2 + Copy3 + Copy2 + Copy4 + Copy2 + Copy5 + Copy2,
  FOOT = '<a href="https://8qbits.com">8qbits.com</a>';

function AboutContent() {
iTITLE = 'About 8qbits.com',
  Z = '&nbsp;',
  A = 'We do quality work',
  B = 'We automate everything',
  C = 'Linux is in our blood',
  D = 'Polymorphism is our religion',
  E = 'We take pride in our craftsmanship',
  Content();
}

function HomeContent(){
iTITLE = 'Welcome to 8qbits.com',
  Z = '&nbsp;',
  A = 'This template is FREE',
  B = 'Email 8qbits@gmail.com for customizations',
  C = 'We can host your website',
  D = 'We welcome any suggestions that you might have',
  E = 'Please let us know what you think',
  Content();
}

function ProductsContent() {
  iTITLE = 'Products by 8qbits.com',
  Z = '&nbsp;',
  A = 'Templates',
  B = 'Code',
  C = 'Websites',
  D = 'Blogs',
  E = 'Gold',
  Content();
}

function ServicesContent() {
  iTITLE = 'Services by 8qbits.com',
  Z = '&nbsp;',
  A = 'Hosting',
  B = 'Coding',
  C = 'AWS Administration',
  D = 'Linux Administration',
  E = 'Automation',
  Content();
}

function TeamContent() {
  iTITLE = 'The 8qbits.com Team',
  Z = '&nbsp;',
  A = 'Rex Russell',
  B = 'Brendan Russell',
  C = 'Rockwell Russell',
  D = 'Edwin Russell',
  E = 'Mrs. Russell',
  Content(); 
}


function Content() {
  if (iTITLE !== 0) {
    inTITLE.style.display = 'block';
    inTITLE.style = 'list-style-type: none';    
    inTITLE.innerHTML = iTITLE;
  }
  if (Z !==0 ) {
    in1.style.display = 'block';
    in0.style = 'list-style-type: none';
    in0.innerHTML = Z;
  }
  if (A !==0 ) {
    in1.style.display = 'block';
    in1.value = 1;
    in1.innerHTML = A;
  }
  if (B !==0 ) {
    in2.style.display = 'block';
    in2.innerHTML = B;
  }
  if (C !==0 ) {
    in3.style.display = 'block';
    in3.innerHTML = C;
  }
  if (D !==0 ) {
    in4.style.display = 'block';
    in4.innerHTML = D;
  }
  if (E !==0 ) {
    in5.style.display = 'block';
    in5.innerHTML = E;
  }
  if (G !==0 ) {
    in6.style.display = 'block';
    in6.innerHTML = G;
  }
  if (H !==0 ) {
    in7.style.display = 'block';
    in7.innerHTML = H;
  }
  if (I !==0 ) {
    in8.style.display = 'block';
    in8.innerHTML = H;
  }
  if (J !==0 ) {
    in9.style.display = 'block';
    in9.innerHTML = J;
  }
  if (K !==0 ) {
    in10.style.display = 'block';
    in10.innerHTML = K;
  }
  if (L !==0 )  {
    in11.style.display = 'block';
    in11.innerHTML = L;
  }
  if (FOOT !==0 ) {
    inFOOT.style.display = 'block';
    inFOOT.innerHTML = FOOT;
  }
}

function Link(){
  if ( in11.innerHTML==CopyRight ) {
    in11.innerHTML=L;
  } else if ( in11.innerHTML==L ) {
    in11.innerHTML=CopyRight;
  }
}

