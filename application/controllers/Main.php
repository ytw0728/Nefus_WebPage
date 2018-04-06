<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {
	function __construct()
	{       
		parent::__construct();
	}
	
	public function index()
	{
		$this->load->view('NEFUS_WEB/templates/index');
	}
	
	//pages
	function login(){
		$this->load->view('NEFUS_WEB/templates/login');
	}
	function register(){
		$this->load->view('NEFUS_WEB/templates/register');
	}
	function guest_book(){
		$result = $this->service_model->getGuestBook();
		$this->load->view('NEFUS_WEB/templates/guest_book', array(
																'messages' => $result
															));
	}


	function dodge_game(){
		$this->load->view('NEFUS_WEB/templates/dodge_game');
	}

	function notice(){
		$this->load->view('NEFUS_WEB/templates/notice');
	}

	function hyowon(){
		$this->load->view('NEFUS_WEB/hyowon/index');
	}
}
