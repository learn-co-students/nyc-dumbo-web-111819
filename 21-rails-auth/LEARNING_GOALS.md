# SWBATs
- Understand, theoretically, how authentication and authorization work
  - Understand the _difference_ between authentication and authorization and how they fit under the umbrella topic _auth_
- Discuss different encryption and hashing schemes, and `bcrypt` specifically
  - Do we want to ever store plaintext user passwords? (no)
- Augment a user model in rails using `bcrypt`, `password_digest`, and `has_secure_password`
- Expose this information in a sample rails app
- Implement sign up, log in, and log out using `session` 