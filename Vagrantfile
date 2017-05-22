$script = <<SHELL
	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo apt-get install -y nodejs

	cd /src && npm install
SHELL

Vagrant.configure('2') do |config|
	config.vm.box = 'ubuntu/xenial64'
	config.vm.network 'private_network',
		ip: '192.168.33.10'

	config.vm.synced_folder '.', '/src'
	config.vm.provision 'shell', inline: $script
end
