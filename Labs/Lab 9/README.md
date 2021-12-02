# Lab 9

We talked about the steps that we could possibly take to deploy a website. I want you to think about the combination of those things that you would consider if you had to deploy your website. This is a good thinking exercise to do because you gain insight to what all of the different steps entail and are responsible for. Write out what parts you would use below and describe why. It doesn't have to be the most detailed but personally what would you want to do? (I'm not looking for perfect but it should be a working configuration. Assuming all of the website code is done. I don't need to hear about that unless its for the certificate or web server).

<!-- Answer Down Here -->

First I would register a domain with GoDaddy, something easy to remember and relevant to the product (kind of like how the name GoDaddy works for that domain registrar service).

Then I would use AWS as the server out of preference, and because it is available anytime anywhere unlike Heroku. I will also not need to worry about any hardware on my end. 
Additionally, I would use NGINX and Apache Web Server to take care of several issues I would not want to spend time on, and help the AWS server when it comes to things such as policies with the website.

Then I would use SSH to connect to these virtual platforms, and services such as Docker and Kubernetes to send the container from one enviroment and thus bring it onto the web.

Finally, I would make sure to use the HTTPS standard for a more secure aproach to managing web trafficing, and I would get a Web Certificate to establish the website as refutable.