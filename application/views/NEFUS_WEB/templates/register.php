<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<?php
      if($this->session->flashdata('message')){
?>
    <script>
        alert("<?=$this->session->flashdata('message')?>");
    </script>
<?php
  }
?>
<?php
    if( $this->session->userdata('is_login') ){
        redirect( base_url() );
    }
?>
<!DOCTYPE html>
<html class = "login">
<head>
    <meta charset = "utf-8"/>
    <meta name = "viewport" content ="width=device-width, initial-scale=1.0,  target-densitydpi=medium-dpi" />
	<meta name="theme-color" content="white"/>
	<meta name="mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<link rel="apple-touch-icon" href="/static/pics/logo/favicon.ico"/>
	<link rel="shortcut icon" type="image/x-icon" href="/static/pics/logo/favicon.ico" /> <!--  파비콘을 만드세요! -->

	<title>
		회원가입 - NEFUS
	</title>
	<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_font.css" />
	<link rel="stylesheet" type="text/css" href="/static/css/login_page.css"/>
    <link rel="stylesheet" type="text/css" href="/static/css/font_awesome/css/font-awesome.min.css"/>
</head>
<body class = "login">
	<header class = "login">
		<span>
            <a href = "<?= base_url('main/login') ?>" class="fa fa-angle-left"></a>
        </span>
		<p>
			회원가입
		</p>
	</header>
	<div class = "users_input_box">
     <?=
            form_open('auth/register','id="users_form"');
        ?>
            <div class = 'inputs_box'>

                <span class = 'inputs'><label for = 'name'>이름</label>
                <?=
                    form_input('name','','id = "name" placeholder = "이름" required pattern = "^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]+.{1,30}" title = "특수문자는 입력할 수 없습니다."');
                ?>
                </span>
                <span class = 'inputs'><label for = 'id'>아이디</label>
                <?=
                    form_input('id','','id = "id" placeholder = "ID" required pattern = "^[a-z]{1}[a-z0-9]{0,20}" title = "영어 소문자와 숫자만 입력 가능합니다. ( 최대 20자 )"');
                ?>
                </span>
                <span class = 'inputs'><label for = 'password'>비밀번호</label>
                <?=
                    form_password('password','','id = "password" placeholder = "PASSWORD" required pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$" title = "영어 대소문자, 숫자, 특수기호를&#10;모두 갖춰야합니다.&#10;(길이 8 ~ 25자 )&#10;사용가능한 특수기호[ !@#$%^&amp;+=- ]"');
                ?>
                </span>
                <span class = 'inputs'><label for = 're_password'>비밀번호 확인</label>
                <?=
                    form_password('re_password','','id = "re_password" placeholder = "PASSWORD" required pattern = "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$" title = "영어 대소문자, 숫자, 특수기호를&#10;모두 갖춰야합니다.&#10;(길이 8 ~ 25자 )&#10;사용가능한 특수기호[ !@#$%^&amp;+=- ]"');
                ?>
                </span>
                <span class = 'inputs'><label for = 'email'>이메일</label>
                <?=
                    form_input('email','','id = "email" placeholder = "E-MAIL" required pattern = "^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$" title = "정확한 이메일 형식으로 입력해주세요.&#10;ex) example@example.com"');
                ?>
                </span>
            </div>
            <span class = 'submit'>
                <p>
                    동아리원은 회원가입 후 내부 인증을 통해서 동아리원 권한으로 변경됩니다.
                </p>
                <?=
                    form_submit('submit','가입하기','class = "btn" id = "submit" type = "submit"');
                ?>
            </span>
        <?=
            form_close();
        ?>
        </div>
    <script>	
    	setTimeout(function(){
    		document.getElementsByClassName('users_input_box')[0].style.opacity = 1;
    	},100);
    	document.getElementById('users_form').addEventListener('submit',function(e){
    		if( document.getElementById('password').value != document.getElementById('re_password').value){
    			alert('비밀번호가 서로 일치하지 않습니다.');
    			document.getElementById('password').focus();
    			e.preventDefault();
    			return false;
    		}
    		else if(confirm('정말 가입하시겠습니까?')){
    			document.getElementById('users_form').submit();
    		}else{
    			e.preventDefault();
    			return false;
    		}
    	},false);
    </script>
</body>
</html>