int func (void);
void wrong (void);
void hello (void);
#define MAX_WORDS 1024
struct _WORDS
{
char* m_Array [MAX_WORDS]; // Every entry is a pointer to string
int m_iCount; // How many filled in 'm_Array'
};
typedef struct _WORDS WORDS;
char* getRandomWord(WORDS *ptr);