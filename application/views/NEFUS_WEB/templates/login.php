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
		로그인 - NEFUS
	</title>
	<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_font.css" />
	<link rel="stylesheet" type="text/css" href="/static/css/login_page.css"/>
	<link rel="stylesheet" type="text/css" href="/static/css/font_awesome/css/font-awesome.min.css"/>
</head>
<body class = "login">
	<header class = "login">
		<span>
			<a href = "<?= base_url() ?>" class="fa fa-angle-left"></a>
		</span>
		<p>	
			로그인
		</p>
	</header>
	<div class = "users_input_box">
	<?=
                form_open('auth/authentication' ,'id="users_form"');
            ?>
                <div class = 'inputs_box'>
                    <span class = 'inputs'><label for = 'id'>아이디</label>
                    <?=
                        form_input('id','',array(
                                            'id' => 'id',
                                            'placeholder' => 'ID',
                                            'required' => 'required',
                                            'pattern' => '^[a-z]{1}[a-z0-9]{0,20}',
                                            'title' => '영어 소문자와 숫자만 입력 가능합니다. ( 최대 20자 )'
                                        ));
                    ?>
                    </span>
                    <span class = 'inputs'><label for = 'password'>비밀번호</label>
                    <?=
                        form_password('password','',array(
                                                'id' => 'password',
                                                'placeholder' => 'PASSWORD',
                                                'required' => 'required',
                                                'pattern' => '^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$',
                                                'title' => '영어 대소문자, 숫자, 특수기호를&#10;모두 갖춰야합니다.&#10;(길이 8 ~ 25자 )&#10;사용가능한 특수기호[ !@#$%^&amp;+=- ]'
                                            ));
                    ?>
                    </span>
                </div>

                <div class = 'submit_box'>
                    <?=
                        form_submit('submit','로그인',array(
                                            'id' => 'submit',
                                            'class' => 'btn'
                                        ));
                    ?>
                    <a class = 'btn' href = '/main/register'>회원가입</a>
                </div>
            <?=
                form_close();
            ?>
        </div>

    <script>
    	setTimeout(function(){
    		document.getElementsByClassName('users_input_box')[0].style.opacity = 1;
    	},100);
    </script>
</body>
</html>