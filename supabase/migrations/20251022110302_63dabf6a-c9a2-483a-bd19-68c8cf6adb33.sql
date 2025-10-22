-- Insert all products into the database with UUIDs
INSERT INTO products (id, name, price, image, condition, size, category, description) VALUES
  ('00000000-0000-0000-0000-000000000001'::uuid, 'Vintage Floral Summer Dress', 15, '/placeholder.svg', 'Excellent', 'M', 'women', 'Beautiful vintage floral summer dress'),
  ('00000000-0000-0000-0000-000000000002'::uuid, 'Black Cocktail Dress', 25, '/placeholder.svg', 'Like New', 'S', 'women', 'Elegant black cocktail dress'),
  ('00000000-0000-0000-0000-000000000003'::uuid, 'Maxi Boho Dress', 18, '/placeholder.svg', 'Good', 'L', 'women', 'Stylish maxi boho dress'),
  ('00000000-0000-0000-0000-000000000004'::uuid, 'Red A-Line Dress', 20, '/placeholder.svg', 'Excellent', 'M', 'women', 'Classic red A-line dress'),
  ('00000000-0000-0000-0000-000000000005'::uuid, 'Blue Wrap Dress', 16, '/placeholder.svg', 'Good', 'S', 'women', 'Comfortable blue wrap dress'),
  ('00000000-0000-0000-0000-000000000006'::uuid, 'Black Formal Trousers', 22, '/placeholder.svg', 'Excellent', 'M', 'women', 'Professional black formal trousers'),
  ('00000000-0000-0000-0000-000000000007'::uuid, 'Navy Blue Work Pants', 20, '/placeholder.svg', 'Like New', 'L', 'women', 'Navy blue work pants'),
  ('00000000-0000-0000-0000-000000000008'::uuid, 'Grey Tailored Pants', 24, '/placeholder.svg', 'Excellent', 'S', 'women', 'Perfectly tailored grey pants'),
  ('00000000-0000-0000-0000-000000000009'::uuid, 'Beige Wide-Leg Pants', 21, '/placeholder.svg', 'Good', 'M', 'women', 'Trendy beige wide-leg pants'),
  ('00000000-0000-0000-0000-000000000010'::uuid, 'Pinstripe Formal Pants', 23, '/placeholder.svg', 'Excellent', 'L', 'women', 'Classic pinstripe formal pants')
ON CONFLICT (id) DO NOTHING;