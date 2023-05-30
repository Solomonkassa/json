#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

typedef struct Node
{
   int items;
   struct Node *left;
   struct Node *right;
} node;

/*
  create node for binary tree
*/
node *createnode(int value)
{
  node *newnode = malloc(sizeof(node));
  newnode->items = value;
  newnode->left = NULL;
  newnode->right = NULL;

  return newnode;
}

node *insertleft(node *root, int value)
{
  root->left = createnode(value);
  return root->left;
}

node *insertright(node *root, int value)
{
  root->right = createnode(value);
  return root->right;
}

node *preorder(node *root)
{
  if (root == NULL)
  {
    return NULL;
  }
  printf("%d -> ",root->items);
  preorder(root->left);
  preorder(root->right);
}
node *inorder(node *root)
{
  if (root == NULL)
  {
    return NULL;
  }
  
  inorder(root->left);
  printf("%d -> ",root->items);
  inorder(root->right);
}
node *postorder(node *root)
{
  if (root == NULL)
  {
    return NULL;
  }
  
  postorder(root->left);
  postorder(root->right);
  printf("%d -> ",root->items);
}

int depth(node *root)
{
   int d = 0;
   while(root != NULL)
     {
        d++;
        root = root->left;
     }

  return d;
}

bool Perfect(node *root, int d, int level)
{
  if (root == NULL)
  {
    return true;
  }

  if (root->left == NULL && root->right == NULL)
  {
    return(d == level + 1);
  }
  if (root->left == NULL || root->right == NULL)
  {
    return false;
  }

  return Perfect(root->left, d, level + 1) && Perfect(root->right, d, level + 1);
  
}

bool is_perfect(node *root)
{
  int d = depth(root);

  return Perfect(root, d, 0);
}

int main ()
{
  node *root = createnode(9);

  insertleft(root, 8);
  insertright(root, 11);

  insertleft(root->left, 7);
  insertright(root->right, 6);
 

  printf("preorder traverse : \n");
  preorder(root);

  printf("\ninorder traverse : \n");
  inorder(root);

  printf("\npostorder traverse : \n");
  postorder(root);
  printf("\n");

  printf("Depth of binary tree : \n");
  printf("%d\n", depth(root));

  if (is_perfect(root) == 0)
  {
    printf("The binary tree is not perfect \n");
  }
  
  if (is_perfect(root) == 1)
  {
    printf("The binary tree is  perfect ");
  }


  return 0;
}

