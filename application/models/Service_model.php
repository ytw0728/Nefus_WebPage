<?php
	class Service_model extends Ci_model{
		function __construct(){
			parent::__construct();
		}


		function putGuestBook($option){
			$this->db->set('user_name',$option['name']);
			$this->db->set('user_id',$option['id']);
			$this->db->set('message',$option['message']);
			$this->db->set('date',"NOW()",false);

			$this->db->insert('guest_book');

			$result = $this->db->insert_id();
		}

		function getGuestBook(){

			$this->db->select("user_name");
			$this->db->select("message");
			$this->db->select("UNIX_TIMESTAMP(date) as date");

			$result = $this->db->order_by('id', 'DESC')->get('guest_book')->result();

			return $result;
		}

//end
	}
?>