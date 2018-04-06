<?php
	class User_model extends Ci_model{
		function __construct(){
			parent::__construct();
		}
		
		function add_user($option){
			$this->db->set('user_name',$option['name']);
			$this->db->set('user_id',$option['id']);
			$this->db->set('password',$option['password']);
			$this->db->set('email',$option['email']);
			$this->db->set('created',"NOW()",false);
			
			$this->db->insert('user');
			
			$result = $this->db->insert_id();
		}

		function getUserWithId($option){
			$result = $this->db->get_where('user',array(
													'user_id'=>$option['id'] 
											))->row();
			
			return $result;
		}
		
//end
	}
?>