   document.addEventListener("deviceready", onDeviceReady, false);
	// PhoneGap�������
		// PhoneGap�������
	function create() {
		var myContact = navigator.contacts.create();
		//myContact.displayName = "Test";
		myContact.name = "Test";
		myContact.nickname = "nicai";
		myContact.gender = "male";
		myContact.phoneNumbers = "15810881100";
		myContact.emails = "110@163.com";
		myContact.addrsses = "3sweww";
		myContact.save();
		alert("save success");
	} 
	function find() {

		var options = new ContactFindOptions();
		options.filter="";
		var fields = ["nickname"];
		navigator.contacts.find(fields, onSuccess, onError);
	}
	// onSuccess: ��ȡ��ǰ��ϵ�˽�����Ŀ���
	function onSuccess(contacts) {
alert("result length:"+contacts.length);
		//for (var i=0; i<contacts.length; i++) {
		//	aler("Display Name = " + contacts[i].nickname);
		//}
	}

	// onError: �����ϵ��ʧ��
	function onError() {
		alert('onError!');
	}