<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Service extends CI_Controller {
	function __construct(){
		parent::__construct();
	}

	function guest_book(){
		$temp 			= $this->input->post('guest_message');
		$insert_content = $this->security->xss_clean($temp);
		
		$name 			= $this->session->userdata('user_name');
		$id 			= $this->session->userdata('user_id');
		
		// 값이 없을 때,
		if( !$insert_content || !$name || !$id ){
			$this->session->set_flashdata("message",'글을 게시하지 못하였습니다.');
			redirect( base_url('main/guest_book') );

			return 0;
		}

		// 엔터 제거
		$enter_string = array("<br><br>","<br/><br/>","<br/><br>","<br><br/>","</br><br>","<br></br>","</br></br>");
		$insert_content = str_ireplace($enter_string, "", $insert_content );


		// 괄호 변경  -- if you want more security, just active this part. Then, the HTML codes will just change to normal text string.
		//$insert_content = str_replace("<", "&lt;", $insert_content);
		//$insert_content = str_replace(">", "&gt;", $insert_content);


		$this->service_model->putGuestBook(array(
												'message' => $insert_content,
												'id' => $id,
												'name' => $name
											));


		$this->session->set_flashdata("message",'성공적으로 게시되었습니다.');
		redirect( base_url('main/guest_book') );
	}
}
