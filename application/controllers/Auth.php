<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {
	function __construct(){
		parent::__construct();
	}


	function logout(){
		$this->session->sess_destroy();
		redirect( base_url() );
	}


	function authentication(){
		// 데이터 처리
		$id 		= $this->input->post('id');
		$password 	= $this->input->post('password');

		if( !preg_match('/^[a-z]{1}[a-z0-9]{0,20}$/',$id) ){
			$this->session->set_flashdata('message','로그인에 실패했습니다.');
			redirect( base_url('main/login') );

			return 0;
		}

		// 정규식으로 뽑아내기
		preg_match('/^[a-z]{1}[a-z0-9]{0,20}/',$id ,$matches);
		$id = $matches[0];

		// 데이터 비교 및 수행
		$user = $this->user_model->getUserWithId(array( 'id' => $id ));

		if( $id != $user->user_id ||
			!password_verify( $password , $user->password )
		){
			$this->session->set_flashdata('message','로그인에 실패 했습니다.');
			redirect( base_url('main/login') );

			return 0;
		}

		

		$this->session->set_userdata("is_login",true);
		$this->session->set_userdata('user_name',$user->user_name);
		$this->session->set_userdata('user_id',$user->user_id);

		$returnURL = base_url();
		if( $this->session->userdata('returnURL') ){
			$returnURL = rawurldecode( $this->session->userdata('returnURL') );
			$this->session->unset_userdata('returnURL');
		}

		redirect($returnURL);
		
	}

	function register(){
		// 데이터 전처리
		$this->form_validation->set_rules('id','아이디','required|max_length[20]|is_unique[user.user_id]');
		if( !$this->form_validation->run()){
			$this->session->set_flashdata('message','사용할 수 없는 아이디입니다. ( 아이디 중복, 규칙 위배 등 )');

			$this->load->view('NEFUS_WEB/templates/register');
			return 0;
		}

		$this->form_validation->set_rules('email','이메일 주소','required|valid_email|is_unique[user.email]');
		if( !$this->form_validation->run()){
			$this->session->set_flashdata('message','사용할 수 없는 이메일입니다. ( 이메일 중복, 규칙 위배 등 )');
			$this->load->view('NEFUS_WEB/templates/register');
			return 0;
		}

		$this->form_validation->set_rules('name','이름','required|max_length[30]');
		$this->form_validation->set_rules('password','비밀번호','required|min_length[8]|max_length[25]|matches[re_password]');
		$this->form_validation->set_rules('re_password','비밀번호확인','required');
		if( !$this->form_validation->run()){
			$this->session->set_flashdata("message",'실패하였습니다.\n회원가입을 다시 진행해주십시오.');
			$this->load->view('NEFUS_WEB/templates/register');
			return 0;
		}



		// 데이터 전처리 이후 데이터 체크
		$name = $this->input->post('name');
		$id = $this->input->post('id');
		$password = $this->input->post('password');
		$email = $this->input->post('email');

		if( !preg_match('/^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]+.{1,30}/',$name) ||
			!preg_match('/^[a-z]{1}[a-z0-9]{0,20}/',$id) ||
			!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/',$password)
		){
			$this->session->set_flashdata("message",'실패하였습니다.\n회원가입을 다시 진행해주십시오.');
			$this->load->view('NEFUS_WEB/templates/register');

			return 0;
		}



		// 정규식으로 뽑아내기 
		preg_match('/^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]+.{1,30}/',$name , $matches);
		$name = $matches[0];
		preg_match('/^[a-z]{1}[a-z0-9]{0,20}/',$id , $matches);
		$id = $matches[0];
		preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/',$password , $matches);
		$password = $matches[0];


		// 체크 후 수행
		if( !function_exists('password_hash')){
			$this->load->helper('password');
		}

		$hash = password_hash( $password, PASSWORD_BCRYPT );

		$this->user_model->add_user(array(
			'id' => $id,
			'name' => $name,
			'password' => $hash,
			'email' => $email
		));

		$this->session->set_flashdata("message",'회원가입에 성공하였습니다.');
		redirect( base_url('main/login') );
	}
}
