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
	if( !$this->session->userdata('is_login') ){
		$this->session->set_flashdata('message','로그인이 필요한 서비스입니다.');
		$this->session->set_userdata('returnURL', rawurlencode( current_url() ) );
		redirect( base_url('main/login') );
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
		방명록 - NEFUS
	</title>
	<link type = "text/css" rel = "stylesheet" charset = "utf-8" href = "/static/css/index_font.css" />
	<link rel="stylesheet" type="text/css" href="/static/css/login_page.css"/>
	<link rel="stylesheet" type="text/css" href="/static/css/guest_book.css"/>
	<link rel="stylesheet" type="text/css" href="/static/css/font_awesome/css/font-awesome.min.css"/>
</head>
<body class = "login">

	<header class = "login">
		<span>
			<a href = "<?= base_url() ?>" class="fa fa-angle-left"></a>
		</span>
		<p>
			방명록
		</p>
	</header>
	<div class = "users_input_box">
	    <div class = 'card'>
	    	<span class = 'title_message'>
	    		" 나쁜 말은 노노해.. "
	    	</span>
            <?=
                form_open('service/guest_book',' id ="user_form" ');                                
            ?>
            <?=
                form_textarea('guest_message','', 'cols="10" rows="10" required title = "문자를 입력해주세요" placeholder = "한마디 남겨주세요" ');
            ?>
            <label class = 'submit fa fa-pencil'>
            <?=
                form_submit('submit','','');
            ?>
	    	</label>
	        <div class = 'messages'>
	        	<span class = 'title'>
	        		방명록 노트
	        	</span>
	        	<ul>
	        		<!--
	        			서버 씨
						<li>
							<p>
								내용
							</p>
						</li>
						모양으로 넣어주면 됩니다.
	        		-->
	        		<?php
	        			if( $messages ){
        				foreach( $messages as $temp ){
	        		?>
	        			<li>
	        				<p>
	        					<?= $temp->message ?>
	        				</p>
	        				<span>
	        				<?= $temp->user_name ?> | <?= kdate($temp->date); ?>
	        				</span>
	        			</li>
	        		<?php
        				}
        			}
        			else{
	        		?>
	        			<li>
	        				<p>
	        					첫 글의 주인공이 되어주세요!
	        				</p>
	        			</li>
	        		<?php
	        			}
	        		?>
	        	</ul>
	        </div>
	        <p class = 'notice'>
	        	방명록 이용자의 자유로운 이용을 위해 필터링의 수준을 낮게 유지하고 있습니다.<br/>
	        	허나 부적절한 정보 입력이 심해질 경우, 부득이하게 필터링을 강화할 수 밖에 없음에 유의해주십시오.
	        </p>
	    </div>
    </div>
    <script>
    	setTimeout(function(){
    		document.getElementsByClassName('users_input_box')[0].style.opacity = 1;
    	},100);
    </script>
</body>
</html>