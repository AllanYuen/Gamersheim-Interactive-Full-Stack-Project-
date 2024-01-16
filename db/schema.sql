




GAMERSHEIM DB TABLES		
USER		
UserID	integer	PK
UserName	varchar	
PasswordSalt	varchar	
FirstName	varchar	
LastName	varchar	
PrimaryEmail	varchar	
		
USERLIBRARY		
LibraryID	integer	PK
UserID	integer	FK
GameID	integer	FK
Owned	Y/N	
Rented	Y/N	
Wishlist	Y/N	
Favourite	Y/N	
		
GAME		
GameID	integer	PK
Title	varchar	
Description	varchar	
CoverImage  Object
Trailer  Object
Genres	varchar	
Features	varchar	
Publisher	varchar	
PlatformID	varchar	FK
ReleaseDate	date	
		
PLATFORM		
PlatformID	integer	PK
Platform	varchar (edited) 